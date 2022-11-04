"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerParser = void 0;
const xml2js_1 = require("xml2js");
const dox_1 = require("../setting/dox");
const convert_to_csv_1 = require("../functions/convert_to_csv");
const log = require("custom-logger").config({ level: 0 });
class ControllerParser {
    static parserToXml(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            dox_1.Dox.verification(req);
            log.debug(`parserJSON-To-Xml`);
            let { xml } = req.body;
            let dataResult;
            (0, xml2js_1.parseString)(xml, (err, Json) => {
                if (err) {
                    log.error(`no se pudo parsear el contenido`);
                    throw err.message;
                }
                dataResult = Json;
            });
            convert_to_csv_1.ConvertToCsv.converter(dataResult);
            log.info(`TODO BIEN ✅`);
            res.send(dataResult);
            next();
        });
    }
}
exports.ControllerParser = ControllerParser;
