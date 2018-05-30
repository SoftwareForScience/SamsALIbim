import { SamsDriver } from "../SamsDriver";
import { SamsUser } from "../SamsTypes";
import { SamsSettings } from "../SamsSettings";
const {MySQL} = require("@aliceo2/web-ui");


class SamsMySQLDriver implements SamsDriver {
    
    sql : any;

    constructor(settings: SamsSettings) {
        
        this.sql = new MySQL({
            host: settings.connectionURL,
            user: settings.databaseUser,
            port: settings.databasePort,
            database: settings.databaseName
        });

    }

    getUserKey(id: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getUserByID(id: number): Promise<SamsUser> {
        throw new Error("Method not implemented.");
    }

    close(): void {
       this.sql.close();
    }
}