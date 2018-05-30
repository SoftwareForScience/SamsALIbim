/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the therms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */
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