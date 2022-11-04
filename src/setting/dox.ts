const log = require("custom-logger").config({ level: 0 });
export class Dox {
    public static verification(req) {
        var ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
        log.info(`${ip}`);
    }
}
