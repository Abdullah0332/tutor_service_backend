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
  try {
    const { amount } = req.body;
    if (!amount) return res.status(404).json({ message: "Amount is required" });
    let data = await checkoutRequest(amount);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err?.response?.data?.message);
  }
};

// ---------------------------------------------------------------
// --------------------- CHECKOUT RESULT -----------------------------
// ---------------------------------------------------------------
exports.checkout_result = async (req, res, next) => {
  try {
    resultRequest(req.body.resourcePath, function (responseData) {
      res.status(200).send(responseData);
    });
  } catch (err) {
    res.status(500).send(err?.response?.data?.message);
  }
};

const checkoutRequest = async (amount) => {
  const path = "/v1/checkouts";
  const data = querystring.stringify({
    entityId: config.HYPERPAY_ENTITY_ID,
    amount,
    currency: config.HYPERPAY_CURRENCY,
    paymentType: config.HYPERPAY_PAYMENT_TYPE,
    "customer.givenName": "Muhammad Abdullah Khan",
    "customer.email": "ab@gmail.com"
  });
  const options = {
    port: 443,
    host: "eu-test.oppwa.com",
    path: path,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": data.length,
      Authorization: `Bearer ${config.HYPERPAY_BEARER_TOKEN}`
    }
  };
  return new Promise((resolve, reject) => {
    const postRequest = https.request(options, function (res) {
      const buf = [];
      res.on("data", (chunk) => {
        buf.push(Buffer.from(chunk));
      });
      res.on("end", () => {
        const jsonString = Buffer.concat(buf).toString("utf8");
        try {
          resolve(JSON.parse(jsonString));
        } catch (error) {
          reject(error);
        }
      });
    });
    postRequest.on("error", reject);
    postRequest.write(data);
    postRequest.end();
  });
};

function resultRequest(resourcePath, callback) {
  var path = resourcePath;
  path += `?entityId=${config.HYPERPAY_ENTITY_ID}`;
  const url = "https://eu-test.oppwa.com" + path;
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${config.HYPERPAY_BEARER_TOKEN}`
      }
    })
    .then(function (response) {
      try {
        resDate = JSON.parse(response);
      } catch (e) {
        resData = response;
      }

      return callback(resData.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
