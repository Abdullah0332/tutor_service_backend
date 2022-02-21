const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");

const { update_user_name, update_user_personal_info } = require("../controllers/mobile.controller.js");

const router = express.Router();

router.put("/update-name", sanitizeData, auth, update_user_name);
router.put("/update-personal-info", sanitizeData, auth, update_user_personal_info);

module.exports = router;
