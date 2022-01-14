const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");
const { file } = require("../middlewares/multer.js");

const {
  block_unblock_user,
  all_users_by_status,
  get_single_user,
} = require("../controllers/admin.controller");

const router = express.Router();

router.put("/block-unblock-user", sanitizeData, auth, block_unblock_user);
router.get("/all-users-by-status", sanitizeData, auth, all_users_by_status);
router.get("/get-single-user/:id", sanitizeData, auth, get_single_user);

module.exports = router;
