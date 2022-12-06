const express = require("express");
const authRouter = require("./auth.routes.js");
const tutorRouter = require("./tutor.routes.js");
const parentRouter = require("./parent.routes.js");
const adminRouter = require("./admin.routes.js");
const paymentRouter = require("./payment.routes.js");
const classRouter = require("./class.routes.js");
const mobileRouter = require("./mobile.routes.js");
const workshopRouter = require("./workshop.routes");
const twilioRouter = require("./twilio.routes");
const dummyRouter = require("./dummy.routes");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/tutor", tutorRouter);
apiRouter.use("/parent", parentRouter);
apiRouter.use("/admin", adminRouter);
apiRouter.use("/payment", paymentRouter);
apiRouter.use("/class", classRouter);
apiRouter.use("/mobile", mobileRouter);
apiRouter.use("/workshop", workshopRouter);
apiRouter.use("/twilio", twilioRouter);
apiRouter.use("/dummy", dummyRouter);

module.exports = apiRouter;
