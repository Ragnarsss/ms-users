import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ forbidNonWhitelisted: true }));

  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('Documentación API USUARIOS')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // URL API
  SwaggerModule.setup('docs', app, document);
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
