import 'dotenv/config'
import { DataSource } from "typeorm";
import { Estudiante } from '../models/estudianteModel.js';
import { Profesor } from '../models/profesorModel.js';
import { Curso } from '../models/cursoModel.js';


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST || "localhost",
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
    username: process.env.USER || "test",
    password: process.env.PASSWORD || "test",
    database: process.env.DATABASE || "test",
    logging: true,
    entities: [Estudiante, Profesor, Curso],
    synchronize:true
})