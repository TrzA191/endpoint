/*
import express from 'express'

const app = express()
app.use(express.json())
const PORT = 3000

app.get('/', (_req, res) => {
    console.log('productos corriendo')
    res.send('hola mundo')
})

app.listen(PORT, () => {
    console.log(`Mi primer Servicio de Productos! ${PORT}`)
})
*/
import express from "express";
import dotenv from "dotenv";
import {api_gatewayRoutesRoutes} from "./routes/index";
dotenv.config({path:"/home/endpoint/src/.env"});

dotenv.config(); // Asegúrate de que .env esté cargado si lo usas

const app = express();

const port = process.env.PORT || 3000;


app.get("/", (_req, res) => {
    res.send("Productos corriendo en el puerto " + port);
});

// Usa las rutas correctamente
app.use("/api_gateway", api_gatewayRoutesRoutes);

app.listen(port, () => {
    console.log("Mi primer Servicio de Productos en el puerto", port);
});
