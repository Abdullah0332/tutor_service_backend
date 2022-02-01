const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");
const { file } = require("../middlewares/multer.js");

const {
  block_unblock_user,
  all_users_by_status,
  get_single_user,
  update_admin_password,
  update_admin_profile,
  counts,
  all_unverified_id_iqama,
  update_id_iqama_verification,
  all_declined_id_iqama
} = require("../controllers/admin.controller");

const router = express.Router();

router.put("/block-unblock-user", sanitizeData, auth, block_unblock_user);
router.get("/all-users-by-status", sanitizeData, auth, all_users_by_status);
router.get("/get-single-user/:id", sanitizeData, auth, get_single_user);
router.put("/update-admin-password", sanitizeData, auth, update_admin_password);
router.put(
  "/update-admin-profile",
  sanitizeData,
  file.single("image"),
  auth,
  update_admin_profile
);
router.get("/counts", sanitizeData, auth, counts);
router.get("/all-unverified-id-iqama", sanitizeData, auth, all_unverified_id_iqama);
router.get("/all-declined-id-iqama", sanitizeData, auth, all_declined_id_iqama);
router.put("/update-id-iqama-verification/:id", sanitizeData, auth, update_id_iqama_verification);

module.exports = router;
