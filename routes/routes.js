const express = require("express");
const authRouter = require("./auth.routes.js");
const tutorRouter = require("./tutor.routes.js");
const parentRouter = require("./parent.routes.js");
const adminRouter = require("./admin.routes.js");
const paymentRouter = require("./payment.routes.js");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/tutor", tutorRouter);
apiRouter.use("/parent", parentRouter);
apiRouter.use("/admin", adminRouter);
apiRouter.use("/payment", paymentRouter);

module.exports = apiRouter;
