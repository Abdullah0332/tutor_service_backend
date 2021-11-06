import express from "express";
import authRouter from "./auth.routes.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);

export default apiRouter;
