import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';

const PORT = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
