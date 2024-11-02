import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { env } from '@env';
import { json, urlencoded } from 'express';
import helmet from 'helmet';

const allowedOrigins = [
  // WEBSITES
  'http://localhost',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // PARSE REQUESTS
  app.use(urlencoded({ extended: true }));
  app.use(json({ limit: '10mb' }));

  //security
  app.use(helmet());
  // Enable Cross-origin resource sharing for a list of domains
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.some((o) => origin.startsWith(o))) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const port = env.app.port || 3000;
  await app.listen(port);
  console.log(`app running at http://localhost:${port}/`);
}
bootstrap();
