import express from "express";
import sanitizeData from "../middlewares/sanitize.js";
import { auth } from "../middlewares/auth.js";

import {
  sign_up,
  login,
  me,
  forgot_password,
  otp_verify,
  reset_password,
  refresh_token,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", sanitizeData, sign_up);
router.post("/login", sanitizeData, login);
router.get("/me", auth, me);
router.put("/forgot-password", sanitizeData, forgot_password);
router.put("/otp-verify", sanitizeData, otp_verify);
router.put("/reset-password", sanitizeData, reset_password);
router.get("/refresh-token", auth, refresh_token);

export default router;
