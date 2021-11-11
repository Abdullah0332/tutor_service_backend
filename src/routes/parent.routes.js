import express from "express";
import sanitizeData from "../middlewares/sanitize.js";
import { auth } from "../middlewares/auth.js";

import {} from "../controllers/parent.controller.js";

const router = express.Router();

// router.post("/sign-up", sanitizeData, sign_up);

export default router;
