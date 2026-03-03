import 'dotenv/config'
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST || "localhost",
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
    username: process.env.USER || "test",
    password: process.env.PASSWORD || "test",
    database: process.env.DATABASE || "test",
    logging: true,
    entities: []
})