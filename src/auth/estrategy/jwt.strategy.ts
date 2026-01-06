import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import * as fs from 'fs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req: Request) => {
        if (req && req.cookies && req.cookies['access_token']) {
          return req.cookies['access_token'];
        }
        return null;
      },
      algorithms: ['RS256'],
      secretOrKey: process.env.JWT_PUBLIC_KEY_PATH
        ? fs.readFileSync(process.env.JWT_PUBLIC_KEY_PATH, 'utf8')
        : undefined,
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

    return payload;
  }
}
