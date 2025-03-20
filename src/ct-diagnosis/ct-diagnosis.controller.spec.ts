import { Test, TestingModule } from '@nestjs/testing';
import { CtDiagnosisController } from './ct-diagnosis.controller';

describe('CtDiagnosisController', () => {
  let controller: CtDiagnosisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtDiagnosisController],
    }).compile();

    controller = module.get<CtDiagnosisController>(CtDiagnosisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
