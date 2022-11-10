const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");

const {
  publish_key,
  payment_intent,
  checkout,
  checkout_result
} = require("../controllers/payment.controller.js");

const router = express.Router();

router.get("/publish-key", sanitizeData, auth, publish_key);
router.post("/pay", sanitizeData, auth, payment_intent);
router.get("/checkout", sanitizeData, checkout);
router.get("/checkout-result", sanitizeData, checkout_result);

module.exports = router;
