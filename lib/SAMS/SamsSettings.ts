/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the terms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */

/**
 * Default settings for the SAMS api.
 * @author H.J.M van der Heijden <h.j.m.van.der.heijden@hva.nl>
 */
export class SamsSettings {
    private samsConnectionToken: string;

    private samsConnectionURL: string;

    private samsDatabaseName: string;

    private samsDatabasePort: number;

    private samsDatabaseUser: string;

    private samsDBConcurrency: number;

    public constructor(
        connectionToken: string,
        connectionURL: string,
        dbConcurrency: number,
        databasePort: number,
        databaseUser: string,
        databaseName: string,
     ) {
         this.samsConnectionToken = connectionToken;
         this.samsConnectionURL = connectionURL;
         this.samsDBConcurrency = dbConcurrency;
         this.samsDatabaseUser = databaseUser;
         this.samsDatabasePort = databasePort;
         this.samsDatabaseName = databaseName;
        }

    public get databaseName(): string {
        return this.samsDatabaseName;
    }

    public get databasePort(): number {
        return this.samsDatabasePort;
    }

    public get databaseUser(): string {
        return this.samsDatabaseUser;
    }

    public get connectionToken(): string {
        return this.samsConnectionToken;
    }

    public get connectionURL(): string {
        return this.samsConnectionURL;
    }

    public get DBConcurrency(): number {
        return this.samsDBConcurrency;
    }

}
