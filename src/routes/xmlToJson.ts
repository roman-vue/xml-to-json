import express, { Router, Request, Response, NextFunction } from "express";
import { ControllerParser } from "../controller/parser.controller";
const routes = Router();

routes.get("/", async (req: Request, res: any, next: NextFunction) => {
    res.send({ msg: "welcome" });
    next();
});

routes.get("/parser", ControllerParser.parserToXml);
module.exports = routes;
