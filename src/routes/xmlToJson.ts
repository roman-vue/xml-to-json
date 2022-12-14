import express, { Router, Request, Response, NextFunction } from "express";
import { ControllerParser } from "../controller/parser.controller";
import * as pdf from "xml-to-pdf";
const log = require("custom-logger").config({ level: 0 });
const routes = Router();

routes.get("/", async (req: Request, res: any, next: NextFunction) => {
    log.debug(`ruta inicial`);
    res.send({ msg: "welcome" });
    next();
});

routes.get("/parser", ControllerParser.parserToXml);

routes.post("/convert-csv", ControllerParser.convertCsv);
module.exports = routes;
