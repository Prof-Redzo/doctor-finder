import express from "express";
import { login, registerDoctor } from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/auth/login", login);
router.post('/auth/register-doctors', registerDoctor);

export default router;