import { SamsException, SamsNotImplementedException } from "./SamsExceptions";
import { SamsUser } from "./SamsTypes";

export interface SamsDriver {

    getUserKey(id: string) : Promise<number>;

    getUserByID(id: number) : Promise<SamsUser>;

    close() : void;
}

export default SamsDriver;