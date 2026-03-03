import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Profesor } from "./profesorModel.js";
import { Estudiante } from "./estudianteModel.js";

@Entity('cursos')
export class Curso extends BaseEntity {


    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    nombre:String;

    @Column({type:"text"})
    descripcion:String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date
    
    @ManyToOne(() => Profesor,(profesor)=> profesor.cursos)
    @JoinColumn({name:'profesor_id'})
    profesor: Profesor


    @ManyToMany(() => Estudiante)
    @JoinTable({
        name: 'cursos_estudiantes',
        joinColumn: {name: 'curso_id'},
        inverseJoinColumn: {name:'estudiante_id'}
    })
    estudiantes: Estudiante[]
}