import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity'; // Import User entity

@Entity()
export class Diagnosis {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // age: number;

  // @Column()
  // gender: number;

  @Column()
  airPollution: number;

  @Column()
  alcoholUse: number;

  @Column()
  dustAllergy: number;

  @Column()
  occupationHazard: number;

  @Column()
  geneticRisk: number;

  @Column()
  chronicLungDisease: number;

  @Column()
  balancedDiet: number;

  @Column()
  obesity: number;

  @Column()
  smoking: number;

  @Column()
  passiveSmoker: number;

  @Column()
  chestPain: number;

  @Column()
  coughingOfBlood: number;

  @Column()
  fatigue: number;

  @Column()
  weightLoss: number;

  @Column()
  shortnessOfBreath: number;

  @Column()
  wheezing: number;

  @Column()
  swallowingDifficult: number;

  @Column()
  clubbingOfFingerNails: number;

  @Column()
  frequentCold: number;

  @Column()
  dryCough: number;

  @Column()
  snoring: number;

  @Column()
  prediction: string; 

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.diagnoses, { onDelete: 'CASCADE' })
  user: User;
}
