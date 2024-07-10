import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('testQueue') private queue: Queue) {}

  async addTestJob(data: any) {
    await this.queue.add('testJob', data);
  }
}
