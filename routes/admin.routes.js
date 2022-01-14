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
} = require("../controllers/admin.controller");

const router = express.Router();

router.put("/block-unblock-user", sanitizeData, auth, block_unblock_user);
router.get("/all-users-by-status", sanitizeData, auth, all_users_by_status);
router.get("/get-single-user/:id", sanitizeData, auth, get_single_user);
router.put("/update-admin-password", sanitizeData, auth, update_admin_password);
router.put("/update-admin-profile", sanitizeData, auth, update_admin_profile);

module.exports = router;
