import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(PrismaModule);

  	// 👇 binds ValidationPipe to the entire application
    app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Mi Life Design - Back End')
    .setDescription(
      'The back-end solution for a desktop management application',
    )
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { customSiteTitle: 'Back End' });

  await app.listen(3000);
}
bootstrap();
