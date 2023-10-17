import { Test, TestingModule } from '@nestjs/testing';
import { JobAdService } from './job_ad.service';

describe('JobAdService', () => {
  let service: JobAdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobAdService],
    }).compile();

    service = module.get<JobAdService>(JobAdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
