import type { Request, Response } from "express";
import { Profesor } from "../models/profesorModel.js";

class ProfesoresController {
    constructor(){}

    async consultar(req:Request,res:Response) {
        try {
           const data = await Profesor.find()
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
           const registro = await Profesor.findOneBy({id:Number(id)})
           res.status(200).json(registro)
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    async ingresar(req: Request, res: Response) {
    try {
    
        const { dni, nombre, apellido, email, telefono, profesion } = req.body;
        const registro = await Profesor.save({
            dni:dni,
            nombre:nombre,
            apellido:apellido,
            email:email,
            telefono:telefono,
            profesion:profesion
        });

        res.status(201).json(registro);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
    }
}
    async actualizar(req:Request,res:Response){
        const { dni, nombre, apellido, email, telefono, profesion } = req.body;
        try {
            const {id} = req.params;
            const registro = await Profesor.findOneBy({id:Number(id)})
            if(!registro){
                throw new Error("Profesor no encontrado")
            }

            await Profesor.update({id: Number(id)}, {dni:dni,nombre:nombre,apellido:apellido,email:email, telefono:telefono, profesion:profesion})
            const registroActualizado = await Profesor.findOneBy({id:Number(id)})
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
            const registro = await Profesor.findOneBy({id:Number(id)})
            if(!registro){
                throw new Error("Profesor no encontrado")
            }

            await Profesor.delete({id: Number(id)})
            res.status(204).json({msg:"Eliminado"});
          
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }
}

export default new ProfesoresController();