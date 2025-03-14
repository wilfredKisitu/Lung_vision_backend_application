import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Diagnosis } from 'src/Entities/diagnosis.entity';
import { Repository } from 'typeorm';
import { ICreateDiagnosis } from './diagnosis-interface/create-diagnosis';
import { PythonShell } from 'python-shell';
import { User } from 'src/Entities/user.entity';



@Injectable()
export class DiagnoseService {
    constructor(
        @InjectRepository(Diagnosis) 
        private readonly diagnosisRepository: Repository<Diagnosis>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ){}
    
    // get diagnosis
    async findDiagnosis(diagnosisId: number){
        return this.diagnosisRepository.findBy({id: diagnosisId});
    }

    // get Diagnosis by ID 
    async getDiagnosesByUserId(userId: number): Promise<Diagnosis[]> {
        const diagnoses = await this.diagnosisRepository.find({
          where: { user: { id: userId } },
          order: { createdAt: 'DESC' }, 
        });
    
        if (!diagnoses || diagnoses.length === 0) {
          throw new NotFoundException(`No diagnoses found for user with ID ${userId}`);
        }
        return diagnoses;
      }
    
    // create Diagnosis
    async createDiagnosis(icreateDiagnosis: ICreateDiagnosis) {
        const { userId, ...diagnosisData } = icreateDiagnosis;
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error("User not found");
        }

        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(user.YOB, 10);
        
        console.log({currentYear, age})

        const genderNumeric = user.gender === "M" ? 1 : 2;
    
        const inputData = Object.values({ age, gender: genderNumeric, ...diagnosisData });
        const prediction = await this.runPythonModel(inputData);
    
        const diagnosis = this.diagnosisRepository.create({
            ...diagnosisData,
            prediction,
            user: { id: userId },
        });
    
        return this.diagnosisRepository.save(diagnosis);
    }
    



    private async runPythonModel(inputData: number[]): Promise<string>{
        const options = {
            //mode: 'text',
            pythonOptions: ['-u'],
            scriptPath: './src/diagnose/model-predictions',
            args: inputData.map(String)
        }
        try {
            const results = await PythonShell.run('predict.py', options);
            if(!results || results.length == 0) {
                throw new Error('Python Script returned no results');
            }
            return results[0];

        } catch(err) {
            console.log('Error running python script');
            throw err
        }
    }
}
