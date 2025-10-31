import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(employee_number: string) {
    const user = await this.prisma.users.findUnique({
      where: { employee_number },
    });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const payload = {
      employee_number: user.employee_number,
      position: user.position,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getUserByToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      const employee_number = decoded.employee_number;

      const user = await this.prisma.users.findUnique({
        where: { employee_number },
      });

      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado ' + error);
    }
  }
}
