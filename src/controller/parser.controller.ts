import { NextFunction, Request, Response } from "express";
import { parseString } from "xml2js";
export class ControllerParser {
    public static async parserToXml(req, res, next) {
        let { xml } = req.body;
        let dataResultados;
        parseString(xml, (err, Json) => {
            if (err) {
                throw err.message;
            }
            dataResultados = Json;
        });
        res.send({ jsonParse: dataResultados });
        next();
    }
}
