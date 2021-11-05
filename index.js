import express from "express";
import cors from "cors";
import dbConnection from "./db/connection.js";
import morgan from "morgan";
import chalk from "chalk";

import bodyParser from "body-parser";

// import userRoutes from "./routes/user.routes.js";

const PORT = process.env.PORT || 4000;

//@initializing App
const app = express();
app.use(morgan("dev"));
app.use(cors({ origin: true }));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// app.use("/api", userRoutes);

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(
    chalk.bold.red(`ERROR MESSAGE: `),
    chalk.bold.blue(`${err.message}`)
  );
  // console.log(chalk.bold.red(`ERROR STACK: `), `${err.stack}`);
  console.log(chalk.red("Shutting Down Server due to Uncaught Exception"));
  process.exit(1);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(
    chalk.bold.red(`ERROR MESSAGE: `),
    chalk.bold.blue(`${err.message}`)
  );
  console.log(chalk.bold.red(`ERROR STACK: `), `${err.stack}`);
  console.log(
    chalk.bold.red(
      "Shutting down the server due to Unhandled Promise rejection"
    )
  );
  process.exit(1);
});

//@Starting Server
app.listen(PORT, (err) => {
  if (err) console.log(chalk.bold.red(`${err.message}`), err);
  console.log(chalk.bold.green("✓"), `Listening on port ${PORT}`);
});
// @Connecting to Database
dbConnection();
