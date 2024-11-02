import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { env } from '@env';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // PARSE REQUESTS
  app.use(urlencoded({ extended: true }));
  app.use(
    json({
      limit: '10mb',
    }),
  );

  const port = env.app.port || 3000;
  await app.listen(port);
  console.log(`app running at http://localhost:${port}/`);
}
bootstrap();
