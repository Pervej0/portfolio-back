import app from "./app";
import config from "./config/config";
const PORT = 8080;

app.listen(PORT, () => console.log("Server is running on port: ", PORT));
