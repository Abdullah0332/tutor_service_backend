const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const config = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EMAIL_VERIFICATION_SECRET: process.env.JWT_EMAIL_VERIFICATION_SECRET,
  JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,

  SENDING_EMAIL: process.env.SENDING_EMAIL,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_API_KEY: process.env.TWILIO_API_KEY,
  TWILIO_API_SECRET: process.env.TWILIO_API_SECRET,
  TWILIO_CHAT_SERVICE_SID: process.env.TWILIO_CHAT_SERVICE_SID,

  VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY
};

module.exports = config;
