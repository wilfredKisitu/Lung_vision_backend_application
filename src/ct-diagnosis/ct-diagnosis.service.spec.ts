import { Test, TestingModule } from '@nestjs/testing';
import { CtDiagnosisService } from './ct-diagnosis.service';

describe('CtDiagnosisService', () => {
  let service: CtDiagnosisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtDiagnosisService],
    }).compile();

    service = module.get<CtDiagnosisService>(CtDiagnosisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
