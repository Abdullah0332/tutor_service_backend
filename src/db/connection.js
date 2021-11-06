import chalk from "chalk";
import mongoose from "mongoose";
import config from "../config/index.js";

const dbConnection = async () => {
  try {
    await mongoose.connect(
      config.MONGO_URI || process.env.MONGO_URI,
      {
        connectTimeoutMS: 20000,
        useNewUrlParser: true,
      },
      () => {
        console.log(chalk.bold.green("✓"), "Db Connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
