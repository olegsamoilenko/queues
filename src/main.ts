import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from "@bull-board/express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const expressAdapter = new ExpressAdapter();
  expressAdapter.setBasePath('/queues');

  await app.init();
  await app.listen(3000);
}
bootstrap();
