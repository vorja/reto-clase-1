// Importar librerías
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Importar rutas
import proveedor from "./src/modules/ciudadanos/proveedor.routes.js";

// Inicializar app de express
const app = express();

// Resolver rutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // Para recibir JSON
app.use(cors());         // Para permitir peticiones desde el frontend



//Rutas del sistema
app.use('/proveedor', proveedor);

//Arrancar servidor
const puerto = process.env.APP_PORT || 4100;
app.listen(puerto, () => {
    console.log(`API ejecutándose en el puerto ${puerto}`);
});
