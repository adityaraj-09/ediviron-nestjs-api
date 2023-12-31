import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ExpressAdapter } from '@nestjs/platform-express';
import  express from 'express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule,
    new ExpressAdapter(server),
    );
    app.enableCors();
  await app.listen(3000,"0.0.0.0");
}
bootstrap();
