import { Router } from "express";
import { AuthController } from "./auth.controller.js";

const router = Router();
const controller = new AuthController();

// POST /api/v1/auth/register
router.post("/register", controller.register);

export default router;
