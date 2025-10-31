import { Controller, Post, Body, Get, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  async login(@Body() body: { employee_number: string }) {
    return await this.authService.login(body.employee_number);
  }

  @Get('user-by-token')
  async getUserByToken(@Req() req) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    const token = authHeader.split(' ')[1];
    const decoded = this.jwtService.verify(token);

    const user = await this.prisma.users.findUnique({
      where: { employee_number: decoded.employee_number },
    });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return user;
  }
}
