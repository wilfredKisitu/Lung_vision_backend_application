import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';
import * as path from 'path';

@Injectable()
export class ctDiagnoseService {
  async diagnoseWithRoboflow(imagePath: string): Promise<any> {
    const pythonScriptPath = path.resolve(__dirname, '..', 'scripts', 'roboflow_inference.py');
    console.log(pythonScriptPath);

    // const options = {
    //   pythonPath: '/root/tensorflow_env/bin/python', // Adjust path if needed
    //   args: [imagePath],
    // };

    // try {
    //   const results = await PythonShell.run(pythonScriptPath, options);

    //   if (!results || results.length === 0) {
    //     throw new Error('Python script returned no results');
    //   }

    //   // Parse the last line of the script output as JSON
    //   return JSON.parse(results[results.length - 1]);
    // } catch (error) {
    //   console.error('Error calling Roboflow API:', error.message);
    //   throw new Error('Failed to process image with Roboflow API');
    // }
  }
}
