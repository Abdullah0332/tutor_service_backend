const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");

const { post_data, get_data } = require("../controllers/dummy.controller");

const router = express.Router();

router.post("/", sanitizeData, auth, post_data);

router.get("/", sanitizeData, auth, get_data);

module.exports = router;
