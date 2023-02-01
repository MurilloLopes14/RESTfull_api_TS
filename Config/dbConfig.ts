import mongoose, { mongo } from "mongoose";
import config from "config";

import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco!!");
  } catch (err) {
    Logger.error("Não foi possível se conectar ao banco!!");
    Logger.error(`Erro: ${err}`);
    process.exit(1);
  }
}

export default connect;
