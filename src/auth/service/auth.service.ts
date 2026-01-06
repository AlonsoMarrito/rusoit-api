import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AuthService {
  private privateKey: string;
  private publicKey: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {
    this.privateKey = fs.readFileSync(
      process.env.JWT_PRIVATE_KEY_PATH ||
        path.join(__dirname, '../../../certs/jwtRS256.key'),
      'utf8',
    );
    this.publicKey = fs.readFileSync(
      process.env.JWT_PUBLIC_KEY_PATH ||
        path.join(__dirname, '../../../certs/jwtRS256.key.pub'),
      'utf8',
    );
  }

  async login(employee_number: string) {
    const user = await this.prisma.users.findUnique({
       where: { employee_number } });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const payload = {
      sub: user.id,
      employee_number: user.employee_number,
      position: user.position,
    };

    const access_token = this.jwtService.sign(payload, {
      privateKey: this.privateKey,
      algorithm: 'RS256',
      expiresIn: '15m',
    });

    const refresh_token = this.jwtService.sign(payload, {
      privateKey: this.privateKey,
      algorithm: 'RS256',
      expiresIn: '24h',
    });

    return { access_token, refresh_token };
  }

  async getUserByToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token, {
        publicKey: this.publicKey,
        algorithms: ['RS256'],
      });

      const user = await this.prisma.users.findUnique({
        where: { employee_number: decoded.employee_number },
      });

      if (!user) throw new UnauthorizedException('Usuario no encontrado');

      return user;
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado: ' + error.message);
    }
  }

  async refreshAccessToken(refresh_token: string) {
    try {
      const decoded = this.jwtService.verify(refresh_token, {
        publicKey: this.publicKey,
        algorithms: ['RS256'],
      });

      const payload = {
        sub: decoded.sub,
        employee_number: decoded.employee_number,
        position: decoded.position,
      };

      const access_token = this.jwtService.sign(payload, {
        privateKey: this.privateKey,
        algorithm: 'RS256',
        expiresIn: '15m',
      });

      return { access_token };
    } catch (error) {
      throw new UnauthorizedException('Refresh token inválido o expirado: ' + error.message);
    }
  }
}
