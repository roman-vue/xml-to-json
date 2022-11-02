import { NextFunction, Request, Response } from "express";
import { parseString } from "xml2js";
const log = require("custom-logger").config({ level: 0 });
export class ControllerParser {
    public static async parserToXml(req, res, next) {
        log.debug(`estamos en parserToXml`);
        let { xml } = req.body;
        let dataResultados;
        parseString(xml, (err, Json) => {
            if (err) {
                log.error(`no se pudo parsear el contenido`);
                throw err.message;
            }
            dataResultados = Json;
        });
        log.info(`TODO BIEN ✅`);
        res.send({ jsonParse: dataResultados });
        next();
    }
}
