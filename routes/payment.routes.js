const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");

const { publish_key, payment_intent } = require("../controllers/payment.controller.js");

const router = express.Router();

router.get("/publish-key", sanitizeData, auth, publish_key);
router.post("/pay", sanitizeData, auth, payment_intent);

module.exports = router;
