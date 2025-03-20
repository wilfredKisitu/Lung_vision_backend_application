import { Module } from '@nestjs/common';
import { ctDiagnoseService } from './ct-diagnosis.service';
import { ctDiagnoseController } from './ct-diagnosis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtDiagnosis } from 'src/Entities/ct_diagnoses';
import { User } from 'src/Entities/user.entity';


@Module({
  imports: [
      TypeOrmModule.forFeature([CtDiagnosis, User])
    ],
  providers: [ctDiagnoseService],
  controllers: [ctDiagnoseController]
})
export class CtDiagnosisModule {}
