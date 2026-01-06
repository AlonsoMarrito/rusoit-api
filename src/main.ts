import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/module/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { readFileSync, existsSync } from 'fs';

async function bootstrap() {
  const httpsKeyPath = process.env.HTTPS_KEY || '/certs/localhost+2-key.pem';
  const httpsCertPath = process.env.HTTPS_CERT || '/certs/localhost+2.pem';

  const httpsOptions =
    existsSync(httpsKeyPath) && existsSync(httpsCertPath)
      ? {
          key: readFileSync(httpsKeyPath),
          cert: readFileSync(httpsCertPath),
        }
      : undefined;

  const jwtPrivateKeyPath =
    process.env.JWT_PRIVATE_KEY_PATH || '/certs/jwtRS256.key';
  const jwtPublicKeyPath =
    process.env.JWT_PUBLIC_KEY_PATH || '/certs/jwtRS256.key.pub';

  const jwtPrivateKey = existsSync(jwtPrivateKeyPath)
    ? readFileSync(jwtPrivateKeyPath)
    : undefined;
  const jwtPublicKey = existsSync(jwtPublicKeyPath)
    ? readFileSync(jwtPublicKeyPath)
    : undefined;

  const app = await NestFactory.create(
    AppModule,
    httpsOptions ? { httpsOptions } : undefined,
  );

  app.enableCors({
    origin: ['https://localhost:8080'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  });

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
