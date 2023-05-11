import { NestFactory } from '@nestjs/core';
import { AuthenticationModule } from './authenticationModule';

const PORT = process.env.PORT ?? 4000;

async function bootstrap() {
  const app = await NestFactory.create(AuthenticationModule);
  await app.listen(PORT);
}
bootstrap();
