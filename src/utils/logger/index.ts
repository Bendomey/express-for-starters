import { CONFIG } from "../../../config";
import debug from "debug";


export const createLogger =
  (logName: string) =>
    debug(`${CONFIG.applicationName}:${logName}`);