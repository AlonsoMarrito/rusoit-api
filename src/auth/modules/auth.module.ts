import { Module } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthController } from '../controller/auth.controller';
import { PrismaService } from '../../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../estrategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'TU_SECRETO_AQUI',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, PrismaService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, JwtModule, AuthService],
})
export class AuthModule {}
