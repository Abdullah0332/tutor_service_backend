import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const config = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EMAIL_VERIFICATION_SECRET: process.env.JWT_EMAIL_VERIFICATION_SECRET,
  JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,

  SENDING_EMAIL: process.env.SENDING_EMAIL,
};

export default config;
