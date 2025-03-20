import { Module } from '@nestjs/common';
import { CtDiagnosisService } from './ct-diagnosis.service';
import { CtDiagnosisController } from './ct-diagnosis.controller';

@Module({
  providers: [CtDiagnosisService],
  controllers: [CtDiagnosisController]
})
export class CtDiagnosisModule {}
