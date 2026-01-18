import * as nodeCrypto from 'crypto';

// Polyfill de crypto.randomUUID para TypeORM
if (!globalThis.crypto) {
  // @ts-ignore
  globalThis.crypto = {};
}

if (!globalThis.crypto.randomUUID) {
  // @ts-ignore
  globalThis.crypto.randomUUID = () => nodeCrypto.randomUUID();
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import 'dotenv/config';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Cats Breeds API')
    .setDescription('API REST para gestión de gatos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000, "0.0.0.0");
}
bootstrap();
