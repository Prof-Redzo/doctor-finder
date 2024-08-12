import express from "express";
import { createService } from "../controllers/service-controller.js";
import { getService } from "../controllers/service-controller.js";
import authorizeRole from "../middlewares/role-middleware.js";
import authenticate from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/services", authenticate, authorizeRole, createService);
router.get("/services", getService);

export default router;