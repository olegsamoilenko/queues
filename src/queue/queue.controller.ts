import { Controller, Get } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller()
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Get('add-job')
  async addJob() {
    await this.queueService.addTestJob({ message: 'Hello from the queue!' });
    return 'Job added to the queue!';
  }
}