const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/connection.js");
const morgan = require("morgan");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const path = require("path");

const apiRouter = require("./routes/routes.js");

const PORT = process.env.PORT || 3000;

//@initializing App
const app = express();
app.use(morgan("dev"));
app.use(cors({ origin: true }));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api", apiRouter);

// path for images
app.use("/data", express.static(path.join(__dirname, "data")));

app.use("/", (req, res, next) => {
  res.send("Backend Running.");
});

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