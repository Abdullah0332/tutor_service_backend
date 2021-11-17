import express from "express";
import sanitizeData from "../middlewares/sanitize.js";
import { auth } from "../middlewares/auth.js";
import { file } from "../middlewares/multer.js";

import {
  update_tutor_profile,
  list_of_tutors,
  get_single_tutor,
} from "../controllers/tutor.controller.js";

const router = express.Router();

router.get("/all-tutors", sanitizeData, list_of_tutors);
router.get("/single-tutor/:id", sanitizeData, get_single_tutor);

router.put(
  "/update-profile",
  sanitizeData,
  auth,
  file.array("gallery", "30"),
  update_tutor_profile
);

export default router;
