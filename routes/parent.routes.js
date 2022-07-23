const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");

const { file } = require("../middlewares/multer.js");

const {
  update_parent_profile,
  add_kid,
  remove_kid,
  update_kid,
  get_all_kid,
  get_all_payments,
  update_user_type,
} = require("../controllers/parent.controller.js");

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

router.get("/all-purchases", sanitizeData, auth, get_all_payments);
router.put("/update-user-type", sanitizeData, auth, update_user_type);

module.exports = router;
