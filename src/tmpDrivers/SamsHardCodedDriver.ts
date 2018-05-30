/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the therms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */
import SamsDriver from "../SamsDriver";
import { SamsUser } from "../SamsTypes";

class SamsHardCodedDriver implements SamsDriver {


    getUserKey(id: string): Promise<number> {
        if(id === "Jbon") {
            return new Promise<number> ((res, rej) => {
                    res(1);
            })
        }
        if (id === "fVanderM") {
            return new Promise<number> ((res, rej) => {
                res(2);
            }); 
        }
    }
    getUserByID(id: number): Promise<SamsUser> {
        if(id === 1) {
            return new Promise<SamsUser> ( (res, rej) => {
                res(new SamsUser(
                    "jan bond",
                    "jan@cern.ch",
                    1,
                    1
                ));
            });
        }
        if(id === 2) {
            return new Promise<SamsUser> ( (res,rej) => {
                res(new SamsUser(
                    "Frederick van der Meulen",
                    "Fred@cern.ch",
                    2,
                    2
                ));
            });
        }

    }
    close(): void {
        
    }
}