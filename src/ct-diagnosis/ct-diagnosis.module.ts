import { Module } from '@nestjs/common';
import { ctDiagnoseService } from './ct-diagnosis.service';
import { ctDiagnoseController } from './ct-diagnosis.controller';


@Module({
  providers: [ctDiagnoseService],
  controllers: [ctDiagnoseController]
})
export class CtDiagnosisModule {}
