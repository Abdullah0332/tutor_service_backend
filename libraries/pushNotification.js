const admin = require("firebase-admin");
const FCMTokenModel = require("../models/fcmToken.model");

exports.sendNotification = async ({ title, body, userTokens }) => {
  let payload = {
    notification: {
      title: title ?? "",
      body: body ?? ""
    },
    android: {
      ttl: 3600000
    },
    tokens: userTokens
  };

  admin
    .messaging()
    // .sendToDevice(registrationTokens, payload, options)
    .sendMulticast(payload)
    .then(async (response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("ERROR Notification : ", error);
    });
};

exports.filteredFCMTokens = async (id) => {
  const all_tokens = await FCMTokenModel.find({ user_id: id });
  let mapped = all_tokens.map(({ fcm_token }) => fcm_token);
  return mapped.filter((x) => x !== undefined);
};
