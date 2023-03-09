import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { Config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  app.use(helmet());
  app.use(
    session({
      secret: Config.secret,
      resave: false,
      saveUninitialized: false,
    }),
  );

  // Swagger Init
  const config = new DocumentBuilder()
    .setTitle('PYT')
    .setDescription('PYT API Documentation')
    .setVersion('1.0')
    .addTag('PYT')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(Config.port);
}
bootstrap();
