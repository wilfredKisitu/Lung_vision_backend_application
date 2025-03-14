import { Module } from '@nestjs/common';
import { DiagnoseController } from './diagnose.controller';
import { DiagnoseService } from './diagnose.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diagnosis } from 'src/Entities/diagnosis.entity';
import { User } from 'src/Entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Diagnosis, User])
  ],
  controllers: [DiagnoseController],
  providers: [DiagnoseService, UserService]
})
export class DiagnoseModule {}
