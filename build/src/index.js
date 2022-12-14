"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv = __importStar(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const log = require("custom-logger").config({ level: 0 });
dotenv.config({ path: __dirname + "/.env" });
const app = (0, express_1.default)();
app.set("trust proxy", "loopback");
app.set("port", process.env.PORT || 4000);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use(express_1.default.json({ limit: "50mb" }));
app.use((0, morgan_1.default)("dev"));
app.use(require("./routes/xmlToJson"));
app.listen(app.get("port"), () => {
    log.info(`server on port `, `http://localhost:${app.get("port")}`);
});
