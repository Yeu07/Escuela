import type { Request, Response } from "express";
import { Estudiante } from "../models/estudianteModel.js";

class EstudiantesControllers {
    constructor(){}

    async consultar(req:Request,res:Response) {
        try {
           const data = await Estudiante.find()
           res.status(200).json(data)
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            } 
        }
    }

    async consultarDetalle(req:Request,res:Response){
        const {id} = req.params;
         try {
           const registro = await Estudiante.findOneBy({id:Number(id)})
           res.status(200).json(registro)
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    async ingresar(req: Request, res: Response) {
    try {
    
        const { dni, nombre, apellido, email } = req.body;
        const registro = await Estudiante.save({
            dni:dni,
            nombre:nombre,
            apellido:apellido,
            email:email
        });

        res.status(201).json(registro);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
    }
}
    async actualizar(req:Request,res:Response){
        const { dni, nombre, apellido, email } = req.body;
        try {
            const {id} = req.params;
            const registro = await Estudiante.findOneBy({id:Number(id)})
            if(!registro){
                throw new Error("Estudiante no encontrado")
            }

            await Estudiante.update({id: Number(id)}, {dni:dni,nombre:nombre,apellido:apellido,email:email})
            const registroActualizado = await Estudiante.findOneBy({id:Number(id)})
            res.status(201).json(registroActualizado)
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    async borrar(req:Request,res:Response){
        try {
            const {id} = req.params;
            const registro = await Estudiante.findOneBy({id:Number(id)})
            if(!registro){
                throw new Error("Estudiante no encontrado")
            }

            await Estudiante.delete({id: Number(id)})
            res.status(204).json({msg:"Eliminado"});
          
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }
}

export default new EstudiantesControllers();