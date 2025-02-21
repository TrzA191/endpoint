import { Router } from "express";
import { getAllProductos } from "../controllers/producto.controller";


const router = Router();

// Endpoint GET: /productos/all 
router.get("/all", getAllProductos);  

export default router;

