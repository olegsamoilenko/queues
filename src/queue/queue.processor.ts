import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('testQueue')
export class QueueProcessor {
  @Process('testJob')
  async handleTestJob(job: Job) {
    console.log('Processing job:', job.id, 'with data:', job.data);

  }
}