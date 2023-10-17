import { Test, TestingModule } from '@nestjs/testing';
import { JobAdController } from './job_ad.controller';

describe('JobAdController', () => {
  let controller: JobAdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobAdController],
    }).compile();

    controller = module.get<JobAdController>(JobAdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
