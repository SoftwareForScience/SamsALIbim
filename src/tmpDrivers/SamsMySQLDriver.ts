/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the therms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */
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