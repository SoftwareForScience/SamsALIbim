import { SamsException, SamsNotImplementedException } from "./SamsExceptions";
import { SamsUser } from "./SamsTypes";

/**
 * The interface an implementation of SAMS should adhere to.
 * @author H.J.M van der Heijden <h.j.m.van.der.heijden@hva.nl>
 */
export interface SamsDriver {

    getUserKey(id: string) : Promise<number>;

    getUserByID(id: number) : Promise<SamsUser>;

    close() : void;
}

export default SamsDriver;