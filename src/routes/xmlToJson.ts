import express, { Router, Request, Response, NextFunction } from "express";
import { ControllerParser } from "../controller/parser.controller";
const log = require("custom-logger").config({ level: 0 });
const routes = Router();

routes.get("/", async (req: Request, res: any, next: NextFunction) => {
    log.debug(`ruta inicial`);
    res.send({ msg: "welcome" });
    next();
});

routes.get("/parser", ControllerParser.parserToXml);
module.exports = routes;
