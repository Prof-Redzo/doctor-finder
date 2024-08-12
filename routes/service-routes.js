import express from "express";
import { createService } from "../controllers/service-controller.js";
import authorizeRole from "../middlewares/role-middleware.js";
import authenticate from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/services", authenticate, authorizeRole, createService);

export default router;