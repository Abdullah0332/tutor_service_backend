const stripe = require("stripe")(process.env.secret_key);
const https = require("https");
const querystring = require("querystring");
const axios = require("axios");
const config = require("../config");

// ---------------------------------------------------------------
// --------------------- GET PUSBLISH KEY -----------------------------
// ---------------------------------------------------------------
exports.publish_key = async (req, res, next) => {
  try {
    const publish_key = process.env.publish_key;
    res.status(200).json({ publish_key });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- CREATE PAYMENT INTENT -----------------------------
// ---------------------------------------------------------------
exports.payment_intent = async (req, res, next) => {
  try {
    const { amount } = req.body;
    if (!amount) return res.status(404).json({ message: "Amount is required" });
    let updated_amount = Number(req.body.amount) * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: updated_amount,
      currency: "usd",
      payment_method_types: ["card"],
      metadata: { integration_check: "accept_a_payment" }
    });

    res.send({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- CHECKOUT -----------------------------
// ---------------------------------------------------------------
exports.checkout = async (req, res, next) => {
   request(function(responseData) {
    res.json(responseData);
  });
};

// ---------------------------------------------------------------
// --------------------- CHECKOUT RESULT -----------------------------
// ---------------------------------------------------------------
exports.checkout_result = async (req, res, next) => {
   resultRequest(req.body.resourcePath, function(responseData) {
    res.json(responseData);
  });
};


function request(callback) {
  var path = "/v1/checkouts";
  var data = querystring.stringify({
    entityId: "8ac7a4c984364a1a01843d5034aa23da",
    amount: "92.00",
    currency: config.HYPERPAY_CURRENCY,
    paymentType: config.HYPERPAY_PAYMENT_TYPE,
  });
  var options = {
    port: 443,
    host: "eu-test.oppwa.com",
    path: path,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": data.length,
      Authorization:
        `Bearer ${config.HYPERPAY_BEARER_TOKEN}`,
    },
  };
  var postRequest = https.request(options, function(res) {
    res.setEncoding("utf8");
    res.on("data", function(chunk) {
      jsonRes = JSON.parse(chunk);
      return callback(jsonRes);
    });
  });
  postRequest.write(data);
  postRequest.end();
}

function resultRequest(resourcePath, callback) {
  var path = resourcePath;
  path += "?entityId=8ac7a4c984364a1a01843d5034aa23da";
  const url = "https://eu-test.oppwa.com" + path;
  axios
    .get(url, {
      headers: {
        Authorization:
           `Bearer ${config.HYPERPAY_BEARER_TOKEN}`,
      },
    })
    .then(function(response) {
      try {
        resDate = JSON.parse(response);
      } catch (e) {
        resData = response;
      }
      return callback(resData.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}