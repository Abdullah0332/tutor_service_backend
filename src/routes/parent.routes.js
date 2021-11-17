import express from "express";
import sanitizeData from "../middlewares/sanitize.js";
import { auth } from "../middlewares/auth.js";

import { file } from "../middlewares/multer";

import {
  update_parent_profile,
  add_kid,
  remove_kid,
  update_kid,
  get_all_kid,
} from "../controllers/parent.controller.js";

const router = express.Router();

router.put("/update-profile", sanitizeData, auth, update_parent_profile);

// ---------------------------------------------------------------
// --------------------- KID CRUD ROUTES -----------------------------
// ---------------------------------------------------------------
router.get("/get-all-kids", sanitizeData, auth, get_all_kid);
router.put("/add-kid", sanitizeData, auth, file.single("image"), add_kid);
router.put(
  "/update-kid/:id",
  sanitizeData,
  auth,
  file.single("image"),
  update_kid
);
router.put("/remove-kid/:id", sanitizeData, auth, remove_kid);

export default router;
