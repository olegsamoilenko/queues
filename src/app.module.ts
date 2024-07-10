import { Module } from '@nestjs/common';
import { BullBoardModule } from '@bull-board/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueModule } from './queue/queue.module';
import { BullModule } from '@nestjs/bull';
import { ExpressAdapter } from '@bull-board/express';

@Module({
  imports: [
    QueueModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
