const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");
const { file } = require("../middlewares/multer.js");

const {
  update_tutor_profile,
  list_of_tutors,
  get_single_tutor,
  update_tutor_schedule,
  upload_id_iqama_verification,
  upload_certifications
} = require("../controllers/tutor.controller.js");

const router = express.Router();

router.get("/all-tutors", sanitizeData, list_of_tutors);
router.get("/single-tutor/:id", sanitizeData, get_single_tutor);

router.put(
  "/update-profile",
  sanitizeData,
  auth,
  file.any("gallery", "30"),
  update_tutor_profile
);

router.put("/update-schedule/:id", sanitizeData, auth, update_tutor_schedule);
router.put("/upload-id-iqama-verification/:id", sanitizeData, file.single("file"), upload_id_iqama_verification);
router.put("/upload-certifications", sanitizeData, file.any("files", "30"), auth, upload_certifications);

module.exports = router;
