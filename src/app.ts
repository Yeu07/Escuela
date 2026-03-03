import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import estudiantesRoutes from './routes/estudiantesRoutes.js'
import profesoresRoutes from './routes/profesoresRoutes.js'
import cursosRoutes from './routes/cursosRoutes.js'

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use("/estudiantes",estudiantesRoutes)
app.use('/profesores', profesoresRoutes)
app.use('/cursos', cursosRoutes)


export default app;
