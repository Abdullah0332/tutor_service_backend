import express from "express";
import sanitizeData from "../middlewares/sanitize.js";
import { auth } from "../middlewares/auth.js";
import { file } from "../middlewares/multer.js";

import { update_tutor_profile } from "../controllers/tutor.controller.js";

const router = express.Router();

router.put(
  "/update-profile",
  sanitizeData,
  auth,
  file.array("gallery", "30"),
  update_tutor_profile
);

export default router;
