/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the terms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */

import { ISamsDriver } from "../SAMS/SamsDriver";
import { SamsUser } from "../SAMS/SamsUser";
const {logger} = require("@aliceo2/web-ui");

class SamsHardCodedDriver implements ISamsDriver {

    public close(): void {
        logger.log("test");
    }

    public getUserByID(id: number): Promise<SamsUser> {
        if (id === 1) {
            return new Promise<SamsUser> ((res, rej) : void => {
                res(new SamsUser(
                    "jan bond",
                    "jan@cern.ch",
                    1,
                    1,
                ));
            });
        }
        if (id === 2) {
            return new Promise<SamsUser> ((res : Function, rej : Function) : void =>  {
                res(new SamsUser(
                    "Frederick van der Meulen",
                    "Fred@cern.ch",
                    2,
                    2,
                ));
            });
        }

    }

    public getUserKey(id: string): Promise<number> {
        if (id === "Jbon") {
            return new Promise<number> ((res, rej) : void =>  {
                res(1);
            });
        }
        if (id === "fVanderM") {
            return new Promise<number> ((res, rej) : void  => {
                res(2);
            });
        }
    }

  
}
