import { Router } from "express";
import { getAllApi_gateway } from "../controllers/api_gateway.controller";


const router = Router();

// Endpoint GET: /productos/all 
router.get("/all", getAllApi_gateway);  

export default router;

