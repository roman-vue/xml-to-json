import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
const log = require("custom-logger").config({ level: 0 });
dotenv.config({ path: __dirname + "/.env" });
dotenv.config();
const app = express();

app.set("trust proxy", "loopback");
app.set("port", process.env.PORT || 4000);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

app.use(require("./routes/xmlToJson"));

app.listen(app.get("port"), () => {
    if (process.env.PORT) {
        log.warn(`${app.get("port")}`);
    }
    log.info(`server on port `, `http://localhost:${app.get("port")}`);
});
