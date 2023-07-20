import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  await app.listen(3000);
}
bootstrap();
