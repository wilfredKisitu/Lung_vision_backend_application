import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity'; // Ensure this is the correct path to your User entity

@Entity()
export class CtDiagnosis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;

  @Column()
  predictiion: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.ctDiagnoses, { onDelete: 'CASCADE' })
  user: User;
}
