import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Reflector } from '@nestjs/core';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  app.use(express.json({ limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe());
  //app.useGlobalGuards(new AtGuard());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Broders Api')
    .setDescription('List of Api and Data from the Broders Project')
    .setVersion('1.0')
    .addTag('Apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  await app.listen(3333);
}
bootstrap();
