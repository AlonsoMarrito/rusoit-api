// src/auth/estrategy/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'TU_SECRETO_AQUI',
    });
  }

  validate(payload: any) {
    const allowedPositions = ['04', '05', '06'];

    if (!payload || !payload.employee_number) {
      throw new UnauthorizedException('Token inválido o corrupto');
    }

    if (!allowedPositions.includes(payload.position)) {
      throw new UnauthorizedException('No tiene acceso para ver estos datos');
    }

    return {
      employee_number: payload.employee_number,
      position: payload.position,
    };
  }
}
