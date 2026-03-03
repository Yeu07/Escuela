import type { Request, Response } from "express";

class CursosController {
    constructor(){}

    consultar(req:Request,res:Response) {
        try {
           
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            } 
        }
    }

    consultarDetalle(req:Request,res:Response){
        const {id} = req.params;
         try {
           
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    ingresar(req:Request,res:Response){
        try {
            const {dni, nombre, apellido, email} = req.body;
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    actualizar(req:Request,res:Response){
        try {
            const {id} = req.params;
            const {dni, nombre, apellido, email} = req.body;
           
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    borrar(req:Request,res:Response){
        try {
            const {id} = req.params;
          
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }

    asociarEstudiante(req:Request,res:Response){
        try {
            const {id} = req.params;
          
        } catch (error) {
            if(error instanceof Error){
                res.status(500).send(error.message)
            }
        }
    }
}

export default new CursosController();