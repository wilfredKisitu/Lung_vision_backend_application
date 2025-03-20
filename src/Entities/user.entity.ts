import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Diagnosis } from "./diagnosis.entity"; // Import Diagnosis entity
import { CtDiagnosis } from "./ct_diagnoses";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    YOB: string;

    @Column({ type: "enum", enum: ["M", "F"] })
    gender: "M" | "F";

    @Column()
    password: string;

    @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.user)
    diagnoses: Diagnosis[];

    @OneToMany(() => CtDiagnosis, (ctDiagnosis) => ctDiagnosis.user)
    ctDiagnoses: CtDiagnosis[];
}
