import { Test, TestingModule } from '@nestjs/testing';
import { BusinessSectorController } from './business_sectors.controller';

describe('BusinessSectorController', () => {
  let controller: BusinessSectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessSectorController],
    }).compile();

    controller = module.get<BusinessSectorController>(BusinessSectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
