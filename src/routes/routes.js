import express from "express";
import authRouter from "./auth.routes.js";
import tutorRouter from "./tutor.routes.js";
import parentRouter from "./parent.routes.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/tutor", tutorRouter);
apiRouter.use("/parent", parentRouter);

export default apiRouter;
