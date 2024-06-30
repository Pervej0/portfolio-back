import { Server } from "http";
import app from "./app";
import config from "./config/config";

let server: Server;
const main = async () => {
  server = app.listen(config.PORT, () =>
    console.log("The Server is running on port", config.PORT)
  );
};

main();
