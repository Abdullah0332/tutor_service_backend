const express = require("express");
const authRouter = require("./auth.routes.js");
const tutorRouter = require("./tutor.routes.js");
const parentRouter = require("./parent.routes.js");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/tutor", tutorRouter);
apiRouter.use("/parent", parentRouter);

module.exports = apiRouter;
