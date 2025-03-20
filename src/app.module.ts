import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './Entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { DiagnoseModule } from './diagnose/diagnose.module';
import { Diagnosis } from './Entities/diagnosis.entity';
import { CtDiagnosisModule } from './ct-diagnosis/ct-diagnosis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'lungV_1',
      password: 'lungV_1',
      database: 'lungv',
      entities: [User, Diagnosis],
      synchronize: true // reset to false in production
    }),
    UserModule,
    AuthModule,
    DiagnoseModule,
    CtDiagnosisModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
