const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/connection.js");
const morgan = require("morgan");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const path = require("path");
const admin = require("firebase-admin");
const webpush = require("web-push");
const serviceAccount = require("./key/tutor-82f52-firebase-adminsdk-m1u2l-f5bf4c4f0e.json");
const cron = require("node-cron");
const apiRouter = require("./routes/routes.js");
const config = require("./config/index.js");
const { class_reminder_email } = require("./libraries/emails/email.sender.js");
const ClassModel = require("./models/class.model");

const PORT = process.env.PORT || 3000;

webpush.setVapidDetails(
  "mailto:test@test.com",
  config.VAPID_PUBLIC_KEY,
  config.VAPID_PRIVATE_KEY
);

// cron.schedule("*/5 * * * *", async () => {
cron.schedule("*/5 * * * * *", async () => {
  console.log("running a task every minute");
  // const classes = await ClassModel.find({
  //   "time.start_time": { $gte: new Date() }
  // });
  // console.log(classes.length, new Date());
  // await class_reminder_email({
  //   email: "abdullah.khan10032@gmail.com",
  //   subject: "Reminder"
  // });
});

//@initializing App
const app = express();
app.use(morgan("dev"));
app.use(cors({ origin: true }));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.post("/api/subscribe", (req, res) => {
  const { subscription, title, message } = req.body;
  const payload = JSON.stringify({ title, message });
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error("err", err));
  res.status(200).json({ success: true });
});

app.use("/api", apiRouter);

// path for images
app.use("/data", express.static(path.join(__dirname, "data")));

app.use("/", (req, res, next) => {
  res.send("Backend Running.");
});

// Handle Uncaught exceptions
process.on("uncaughtException", err => {
  console.log(
    chalk.bold.red(`ERROR MESSAGE: `),
    chalk.bold.blue(`${err.message}`)
  );
  // console.log(chalk.bold.red(`ERROR STACK: `), `${err.stack}`);
  console.log(chalk.red("Shutting Down Server due to Uncaught Exception"));
  process.exit(1);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", err => {
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
app.listen(PORT, err => {
  if (err) console.log(chalk.bold.red(`${err.message}`), err);
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  console.log(chalk.bold.green("✓"), `Listening on port ${PORT}`);
});
// @Connecting to Database
dbConnection();
