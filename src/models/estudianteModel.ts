import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity('estudiantes')
export class Estudiante {


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

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt:Date;
    
    @DeleteDateColumn()
    deletedAt:Date
    

}