import { Injectable, NotFoundException } from '@nestjs/common';
import { PythonShell } from 'python-shell';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';
import { CtDiagnosis } from 'src/Entities/ct_diagnoses';

@Injectable()
export class ctDiagnoseService {
    getAllDiagnosesForUser(userId: number) {
      throw new Error('Method not implemented.');
    }

    constructor(
      @InjectRepository(User) private readonly userRepository: Repository<User>,
      @InjectRepository(CtDiagnosis) private readonly ctDiagnosisRepository: Repository<CtDiagnosis>,
    ){}

    // Get use ct Diagnosis by id
    async getDiagnosis(userId: number){
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return await this.ctDiagnosisRepository.find({
        where: { user: { id: userId } },
        relations: ['user'],
        order: { createdAt: 'DESC' }, 
      });
    }

    // Diagnose user by ct Scan
    async diagnoseWithRoboflow(imagePath: string, userId: number, imageUrl: string) {
      const pythonScriptPath = path.resolve(process.cwd(), 'src', 'ct-diagnosis', 'model-predictions', 'roboflow_inference.py');
      const options = {
        pythonPath: '/root/tensorflow_env/bin/python',
        args: [imagePath],
      };

      try {
        const results = await PythonShell.run(pythonScriptPath, options);

        if (!results || results.length === 0) {
          throw new Error('Python script returned no results');
        }
        // Prediction
        const predictionData = JSON.parse(results[results.length - 1]);

        if (!predictionData.predictions || predictionData.predictions.length === 0) {
          throw new Error('No predictions returned from the model');
        }
        const topPrediction = predictionData.predictions[0];

        const user = await this.userRepository.findOne({where: {id: userId}});
        if (!user) {
          throw new Error('User not found');
        }

        // Create a new CtDiagnosis record
        const ctDiagnosis = this.ctDiagnosisRepository.create({
          imageUrl: imageUrl,
          predictiion: topPrediction.class, 
          user: user, 
        });

        // Save the CtDiagnosis
        return this.ctDiagnosisRepository.save(ctDiagnosis);

      } catch (error) {
        console.error('Error calling Roboflow API:', error.message);
        throw new Error('Failed to process image with Roboflow API');
      }
    }
}
