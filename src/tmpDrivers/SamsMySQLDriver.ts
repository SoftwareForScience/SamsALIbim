/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the therms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */
import { ISamsDriver } from "../SamsDriver";
import { SamsSettings } from "../SamsSettings";
import { SamsUser } from "../SamsUser";
const {MySQL} = require("@aliceo2/web-ui");

export class SamsMySQLDriver implements ISamsDriver {

    public sql: any;

    public constructor(settings: SamsSettings) {

        this.sql = new MySQL({
            host: settings.connectionURL,
            user: settings.databaseUser,
            port: settings.databasePort,
            database: settings.databaseName,
        });

    }

    public getUserKey(id: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    public getUserByID(id: number): Promise<SamsUser> {
        throw new Error("Method not implemented.");
    }

    public close(): void {
       this.sql.close();
    }
}
