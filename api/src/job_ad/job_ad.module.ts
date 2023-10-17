import { Module } from '@nestjs/common';
import { JobAdService } from './job_ad.service';
import { JobAdController } from './job_ad.controller';

@Module({
  providers: [JobAdService],
  controllers: [JobAdController]
})
export class JobAdModule {}
