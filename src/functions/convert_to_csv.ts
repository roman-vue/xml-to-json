import * as converter from "json-2-csv";
import * as fs from "fs";
const log = require("custom-logger").config({ level: 0 });
export class ConvertToCsv {
    public static converter(json: Object[]) {
        converter.json2csv(json, (err, csv) => {
            if (err) {
                throw err;
            }
            fs.writeFileSync("json.csv", csv);
        });
    }
}
