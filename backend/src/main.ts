import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const corsOptions: CorsOptions = {
    origin: ['http://localhost:5173', 'https://todo-list-ps.vercel.app/'], // Replace with the actual origin of your frontend app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (e.g., cookies, authorization headers)
  };

  // Enable CORS with the specified options
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
