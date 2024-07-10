import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { BullModule } from '@nestjs/bull';
import { QueueProcessor } from './queue.processor';
import { QueueController } from "./queue.controller";
import { BullBoardModule } from "@bull-board/nestjs";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'testQueue',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullBoardModule.forFeature({
      name: 'testQueue',
      adapter: BullMQAdapter,
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService, QueueProcessor],
})
export class QueueModule {}
