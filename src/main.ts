import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;

const appOptions = {
  cors: true
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, appOptions);
  await app.listen(port);
}
bootstrap();
