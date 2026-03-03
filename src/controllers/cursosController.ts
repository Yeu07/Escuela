import type { Request, Response } from "express";
import { Curso } from "../models/cursoModel.js";
import { Estudiante } from "../models/estudianteModel.js";
class CursosController {
    constructor(){}

    async consultar(req:Request,res:Response) {
        try {
           const data = await Curso.find({relations:{profesor:true, estudiantes:true}})
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
           const registro = await Curso.findOne({where: {id:Number(id)}, relations:{profesor:true, estudiantes:true}} )
           res.status(200).json(registro)
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    async ingresar(req: Request, res: Response) {
    try {
    
        const { descripcion, nombre,profesor } = req.body;
        const registro = await Curso.save({
            nombre:nombre,
            descripcion:descripcion,
            profesor:profesor
        });

        res.status(201).json(registro);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
    }
}
    async actualizar(req:Request,res:Response){
        const { descripcion, nombre,profesor } = req.body;
        try {
            const {id} = req.params;
            const registro = await Curso.findOneBy({id:Number(id)})
            if(!registro){
                throw new Error("Curso no encontrado")
            }

            await Curso.update({id: Number(id)}, {nombre:nombre, descripcion:descripcion, profesor:profesor})
            const registroActualizado = await Curso.findOneBy({id:Number(id)})
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
            const registro = await Curso.findOneBy({id:Number(id)})
            if(!registro){
                throw new Error("Curso no encontrado")
            }

            await Curso.delete({id: Number(id)})
            res.status(204).json({msg:"Eliminado"});
          
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    async asociarEstudiante(req:Request,res:Response){
        const {id} = req.params
        try {
            const {estudiante_id, curso_id} = req.body
           const estudiante = await Estudiante.findOneBy({id:Number(estudiante_id)})
           if(!estudiante){
                throw new Error("Estudiante no encontrado")
            }
           const curso = await Curso.findOneBy({id:Number(curso_id)})
           if(!curso){
                throw new Error("Curso no encontrado")
            }

            curso.estudiantes = curso.estudiantes || [];
            curso.estudiantes.push(estudiante)

            const registro = await Curso.save(curso);
            res.status(200).json(registro)
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            } 
        }
    }
}

export default new CursosController();