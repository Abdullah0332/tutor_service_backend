import express from "express";
import sanitizeData from "../middlewares/sanitize.js";
import { auth } from "../middlewares/auth.js";

import { update_parent_profile } from "../controllers/parent.controller.js";

const router = express.Router();

router.put("/update-profile", sanitizeData, auth, update_parent_profile);

export default router;
