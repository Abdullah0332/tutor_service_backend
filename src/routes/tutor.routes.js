import express from "express";
import sanitizeData from "../middlewares/sanitize.js";
import { auth } from "../middlewares/auth.js";

import { update_tutor_profile } from "../controllers/tutor.controller.js";

const router = express.Router();

router.put("/update-profile", sanitizeData, auth, update_tutor_profile);

export default router;
