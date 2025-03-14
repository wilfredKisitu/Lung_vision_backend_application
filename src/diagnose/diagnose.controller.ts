import { Controller, Post, Body, UsePipes, Get, ParseIntPipe, Param, UseGuards } from '@nestjs/common';
import { DiagnoseService } from './diagnose.service';
import { CreateDiagnosisDto } from './diagnosis-dto/create-diagnosis.dto';
import { UserExistsPipe } from 'src/user/Validators/user-exists.pipe';
import { Diagnosis } from 'src/Entities/diagnosis.entity';
import { JwtAuthGuard } from 'src/auth/Guards/jwt-auth-guard';


@Controller('diagnose')
export class DiagnoseController {
  constructor(private readonly diagnoseService: DiagnoseService) {}

  @UseGuards(JwtAuthGuard)
  @Get('user/:userId')
  async getDiagnosesByUser(@Param('userId', ParseIntPipe) userId: number){
    return this.diagnoseService.getDiagnosesByUserId(userId);
  }

  // @UsePipes(UserExistsPipe)
  @Post()
  async createDiagnosis(@Body() createDiagnosisDto: CreateDiagnosisDto) {
    return this.diagnoseService.createDiagnosis(createDiagnosisDto);
  }
  @Get('userDiagnosis/:diagnosisId')
  async getDiagnosisById(@Param('diagnosisId', ParseIntPipe)diagnosisId: number){
    return this.diagnoseService.findDiagnosis(diagnosisId);
  }
}
