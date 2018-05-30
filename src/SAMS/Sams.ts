/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the therms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */
import { ISamsDriver } from "./SamsDriver";
import { SamsSettings } from "./SamsSettings";

/**
 * Global class for managing SAMS (Alice Shift Accounting management system)
 * This class is used for global control
 * @author H.J.M van der Heijden <h.j.m.van.der.heijden@hva.nl>
 * @
 */
export class Sams  {
    private samsDriver: ISamsDriver;
    private samsSettings: SamsSettings;

    public constructor(settings: SamsSettings, driver: ISamsDriver) {
        this.samsSettings = settings;
        this.samsDriver = driver;
    }

    public get settings(): SamsSettings {
        return this.samsSettings;
    }

}
