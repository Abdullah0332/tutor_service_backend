const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");
const { file } = require("../middlewares/multer.js");

const {
  create_workshop,
  get_all_workshops,
  get_single_workshop,
  update_workshop,
  delete_workshop,
  register_on_workshop,
} = require("../controllers/workshop.controller");

const router = express.Router();

router.post(
  "/create",
  sanitizeData,
  file.any("files", "30"),
  auth,
  create_workshop
);

router.get("/all", sanitizeData, get_all_workshops);
router.get("/:id", sanitizeData, get_single_workshop);

router.put(
  "/update/:id",
  sanitizeData,
  file.any("files", "30"),
  auth,
  update_workshop
);

router.delete("/delete/:id", sanitizeData, auth, delete_workshop);
router.post("/register", sanitizeData, register_on_workshop);

module.exports = router;
