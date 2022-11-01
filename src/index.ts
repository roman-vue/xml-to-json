import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config({ path: __dirname + "/.env" });
const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

app.use(require("./routes/xmlToJson"));

app.listen(app.get("port"), () => {
    console.log(`server on port:>> http://localhost:${app.get("port")} `);
});
