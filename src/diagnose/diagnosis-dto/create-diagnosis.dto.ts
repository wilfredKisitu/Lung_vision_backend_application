import { IsInt, IsString, IsIn, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateDiagnosisDto {
  // @IsInt()
  // age: number;

  // @IsInt() @Min(1) @Max(2)
  // gender: number;

  @IsInt() @Min(1) @Max(8)
  airPollution: number;

  @IsInt() @Min(1) @Max(8)
  alcoholUse: number;

  @IsInt() @Min(1) @Max(8)
  dustAllergy: number;

  @IsInt() @Min(1) @Max(8)
  occupationHazard: number;

  @IsInt() @Min(1) @Max(7)
  geneticRisk: number;

  @IsInt() @Min(1) @Max(7)
  chronicLungDisease: number;

  @IsInt() @Min(1) @Max(7)
  balancedDiet: number;

  @IsInt() @Min(1) @Max(7)
  obesity: number;

  @IsInt() @Min(1) @Max(7)
  smoking: number;

  @IsInt() @Min(1) @Max(8)
  passiveSmoker: number;

  @IsInt() @Min(1) @Max(9)
  chestPain: number;

  @IsInt() @Min(1) @Max(9)
  coughingOfBlood: number;

  @IsInt() @Min(1) @Max(9)
  fatigue: number;

  @IsInt() @Min(1) @Max(8)
  weightLoss: number;

  @IsInt() @Min(1) @Max(9)
  shortnessOfBreath: number;

  @IsInt() @Min(1) @Max(8)
  wheezing: number;

  @IsInt() @Min(1) @Max(8)
  swallowingDifficult: number;

  @IsInt() @Min(1) @Max(9)
  clubbingOfFingerNails: number;

  @IsInt() @Min(1) @Max(7)
  frequentCold: number;

  @IsInt() @Min(1) @Max(7)
  dryCough: number;

  @IsInt() @Min(1) @Max(7)
  snoring: number;

  @IsNotEmpty()
  @IsInt()
  userId: number; 
}
