import { Controller, Get, Param, ParseIntPipe, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { ctDiagnoseService } from './ct-diagnosis.service';
import { diskStorage } from 'multer';
import { Request } from 'express';


@Controller('ctDiagnose')
export class ctDiagnoseController {
  constructor(private readonly diagnoseService: ctDiagnoseService) {}

  @Get('user/:userId')
  async getUserDiagnoses(@Param('userId', ParseIntPipe) userId: number) {
    return this.diagnoseService.getAllDiagnosesForUser(userId);
  }

  @Post('upload/:userId')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${Date.now()}_${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async diagnose(
        @Param('userId', ParseIntPipe) userId: number,
        @UploadedFile()
        file: Express.Multer.File,
        @Req() req: Request
    ) {
    const serverUrl = `${req.protocol}://${req.get('host')}`; // Dynamic base URL
    const imageDynamicPath = `${serverUrl}/upload/${file.filename}`
    const imagePath = path.resolve(process.cwd(), 'uploads', file.filename);
    const result = await this.diagnoseService.diagnoseWithRoboflow(imagePath, userId, imageDynamicPath);
    return { imageUrl: `${imageDynamicPath}`, result };
  }
}


