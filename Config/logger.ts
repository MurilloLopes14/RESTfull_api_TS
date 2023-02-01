import winston, { transports, format, addColors } from "winston";
import config from "config";

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  debug: "blue",
  http: "magenta",
};
winston.addColors(colors);

const Logger = winston.createLogger({
  transports: [
    new transports.Console({ level: "debug" }),
    new transports.File({
      level: "error",
      filename: "logs/error.log",
    }),
    new transports.File({
      level: "warn",
      filename: "logs/warn.log",
    }),
    new transports.File({
      level: "info",
      filename: "logs/info.log",
    }),
    new transports.File({
      level: "debug",
      filename: "logs/debug.log",
    }),
    new transports.File({
      level: "http",
      filename: "logs/http.log",
    }),
  ],
  format: format.combine(
    format.json(),
    format.timestamp({ format: "YYYY-DD-MM HH:mm:ss:ms" }),
    format.prettyPrint(),
    format.printf(
      (info) => `${info.timestamp} - ${info.level}: ${info.message}`
    ),
    format.colorize({ all: true })
  ),
});

export default Logger;
