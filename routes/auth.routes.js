const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");
const { file } = require("../middlewares/multer.js");

const {
  sign_up,
  login,
  me,
  forgot_password,
  otp_verify,
  reset_password,
  refresh_token,
  update_user_profile_picture,
  udpate_password_from_profile,
  add_payment_method,
  update_payment_method,
  remove_payment_method,
  get_all_payment_method,
  socialLogin,
  dashboard_counts,
  get_user_notifications,
  get_user_unread_notifications,
  update_notification,
  verify_email,
  resend_verify_email_token
} = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/sign-up", sanitizeData, sign_up);
router.post("/social-login", auth, socialLogin);
router.post("/login", sanitizeData, login);
router.get("/me", auth, me);
router.put("/forgot-password", sanitizeData, forgot_password);
router.post(
  "/resend-verify-email-token",
  sanitizeData,
  resend_verify_email_token
);
router.get("/verify-email/:token", sanitizeData, verify_email);
router.put("/otp-verify", sanitizeData, otp_verify);
router.put("/reset-password", sanitizeData, reset_password);
router.get("/refresh-token", auth, refresh_token);
router.put(
  "/update-profile-pic",
  auth,
  file.single("image"),
  update_user_profile_picture
);
router.put(
  "/update-password-from-profile",
  sanitizeData,
  auth,
  udpate_password_from_profile
);

// ---------------------------------------------------------------
// --------------------- PAYMENT METHOD CRUD ROUTES -----------------------------
// ---------------------------------------------------------------
router.put("/add-payment-method", sanitizeData, auth, add_payment_method);
router.put(
  "/update-payment-method/:id",
  sanitizeData,
  auth,
  update_payment_method
);
router.put(
  "/remove-payment-method/:id",
  sanitizeData,
  auth,
  remove_payment_method
);
router.get(
  "/get-all-payment-method",
  sanitizeData,
  auth,
  get_all_payment_method
);
router.get("/dashboard-counts", sanitizeData, auth, dashboard_counts);
router.get(
  "/get-user-notifications",
  sanitizeData,
  auth,
  get_user_notifications
);
router.get(
  "/get-user-unread-notifications",
  sanitizeData,
  auth,
  get_user_unread_notifications
);
router.put(
  "/update-notification-status/:id",
  sanitizeData,
  auth,
  update_notification
);

module.exports = router;
