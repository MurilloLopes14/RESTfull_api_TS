//ENV
require("dotenv").config();

import express from "express";
import config from "config";

//port route
const port = config.get<number>("port");

//Launching express & JSON config
const app = express();
app.use(express.json());

//DB
import db from "../Config/dbConfig";

//Routes
import router from "./router";

//logger
import Logger from "../Config/logger";

//Middlewares
import morganMiddleware from "../Middlewares/morganMid";

app.use(morganMiddleware);
app.use("/api/", router);

app.listen(port, async () => {
  await db();

  Logger.info(`API rodando na porta http://localhost:${port}`);
});
