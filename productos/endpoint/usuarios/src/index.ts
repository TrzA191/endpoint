import express from "express";
import dotenv from "dotenv";
//import axios from "axios";
import {usuarioRoutes} from "./routes/index";
import {usuRoute} from "./routes/index";
//mi primera vez
dotenv.config({path:"/home/endpoint/src/.env"});

dotenv.config(); // Asegúrate de que .env esté cargado si lo usas

const app = express();

const port = process.env.PORT || 3002;


app.get("/", (_req, res) => {
    res.send("Productos corriendo en el puerto " + port);
});

// Usa las rutas correctamente
app.use("/", usuarioRoutes);
app.use("/usuarios", usuRoute);

app.listen(port, () => {
    console.log("Mi primer Servicio de Productos en el puerto", port);
});
