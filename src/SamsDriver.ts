/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the therms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */
import { SamsUser } from "./SamsUser";

/**
 * The interface an implementation of SAMS should adhere to.
 * @author H.J.M van der Heijden <h.j.m.van.der.heijden@hva.nl>
 */
export interface ISamsDriver {

    close(): void;

    getUserByID(id: number): Promise<SamsUser>;

    getUserKey(id: string): Promise<number>;

}
