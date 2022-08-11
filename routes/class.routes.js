const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");
const { file } = require("../middlewares/multer.js");

const {
  get_upcoming_classes,
  get_single_class,
  get_user_classes,
  new_announcement,
  get_announcement,
  update_announcement,
  delete_announcement,
  new_comment,
  delete_comment,
  place_review,
  get_announcement_by_class_id,
  purchases_earnings,
  update_class,
} = require("../controllers/class.controller");

const router = express.Router();

// ---------------------------------------------------------------
// --------------------- CLASSES ROUTES -----------------------------
// ---------------------------------------------------------------
router.get(
  "/upcomming-classes/:date",
  sanitizeData,
  auth,
  get_upcoming_classes
);
router.put("/update-class/:id", sanitizeData, auth, update_class);
router.get("/single-class/:id", sanitizeData, auth, get_single_class);
router.get("/user-classes", sanitizeData, auth, get_user_classes);
router.post(
  "/new-announcement",
  sanitizeData,
  file.any("files", "30"),
  auth,
  new_announcement
);
router.get("/single-announcement/:id", sanitizeData, auth, get_announcement);
router.put(
  "/update-announcement/:id",
  sanitizeData,
  file.any("files", "30"),
  auth,
  update_announcement
);
router.delete(
  "/delete-announcement/:id",
  sanitizeData,
  auth,
  delete_announcement
);

router.get(
  "/single-announcement-by-class-id/:id",
  sanitizeData,
  auth,
  get_announcement_by_class_id
);

router.put(
  "/new-comment/:id",
  sanitizeData,
  file.any("files", "30"),
  auth,
  new_comment
);
router.put("/delete-comment", sanitizeData, auth, delete_comment);

router.put("/place-review", sanitizeData, auth, place_review);

router.get("/purchases-earnings", sanitizeData, auth, purchases_earnings);

module.exports = router;
