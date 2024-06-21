import { Test, TestingModule } from '@nestjs/testing';
import { EmloyeeController } from './emloyee.controller';
import { EmloyeeService } from './emloyee.service';

describe('EmloyeeController', () => {
  let controller: EmloyeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmloyeeController],
      providers: [EmloyeeService],
    }).compile();

    controller = module.get<EmloyeeController>(EmloyeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
