import express from "express";
import sanitizeData from "../middlewares/sanitize.js";

import { auth } from "../middlewares/auth.js";

const router = express.Router();

export default router;
