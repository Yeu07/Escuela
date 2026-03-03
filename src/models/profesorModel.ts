import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Curso } from "./cursoModel.js";

@Entity('profesores')
export class Profesor {


    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    dni:String;

    @Column({type:"varchar"})
    nombre:String;

    @Column({type:"varchar"})
    apellido:String;

    @Column({type:"varchar"})
    email:String;

    @Column({type:"varchar"})
    telefono:String;

    @Column({type:"varchar"})
    profesion:String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date
    
    @OneToMany(() => Curso, (curso) => curso.profesor)
    cursos: Curso[]
}