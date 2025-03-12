import { Router } from "express";
import { getAllUsuarios } from "../controllers/usuario.controller";
import { gestUsuarios } from "../controllers/usuario.controller";

const router = Router();

// Endpoint GET: /productos/all 
router.get("/all", getAllUsuarios);  
router.get("/consultorio", gestUsuarios);
export default router;

