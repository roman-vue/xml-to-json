"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dox = void 0;
const log = require("custom-logger").config({ level: 0 });
class Dox {
    static verification(req) {
        var ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
        log.info(`${ip}`);
    }
}
exports.Dox = Dox;
