import { NextFunction, Request, Response } from "express";
import { parseString } from "xml2js";
import { Dox } from "../setting/dox";
import { ConvertToCsv } from "../functions/convert_to_csv";
const log = require("custom-logger").config({ level: 0 });
export class ControllerParser {
    public static async parserToXml(req, res, next) {
        Dox.verification(req);
        log.debug(`parserJSON-To-Xml`);
        let { xml } = req.body;
        let dataResult;
        parseString(xml, (err, Json) => {
            if (err) {
                log.error(`no se pudo parsear el contenido`);
                throw err.message;
            }
            dataResult = Json;
        });
        log.info(`TODO BIEN ✅`);
        res.send(dataResult);
        next();
    }

    public static async convertCsv(req, res, next) {
        log.debug(`convertCsv`);
        Dox.verification(req);
        let { xml } = req.body;
        let dataResult;
        parseString(xml, (err, Json) => {
            if (err) {
                log.error(`no se pudo parsear el contenido`);
                throw err.message;
            }
            dataResult = Json;
        });
        const csv = ConvertToCsv.converter(dataResult);
        log.info(`TODO BIEN ✅`);
        res.attachment("dataXml.csv");
        res.send(csv);
        next();
    }
}
