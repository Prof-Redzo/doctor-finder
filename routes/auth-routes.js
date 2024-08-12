import express from "express";
import { login, registerDoctor } from "../controllers/auth-controller.js";
import authorizeRole from "../middlewares/role-middleware.js";

const router = express.Router();

router.post("/auth/login", login);
router.post('/auth/register-doctors', authorizeRole, registerDoctor);

export default router;