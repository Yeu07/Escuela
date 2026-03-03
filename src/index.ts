import app from './app.js'
import { AppDataSource } from './db/conexion.js';


async function main(){
    try {
        await AppDataSource.initialize();
        console.log("Base de Datos conectada")
        app.listen(6500, () => {
        console.log("Activado")
        })
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
        }
    }
}

main();