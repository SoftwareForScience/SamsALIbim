/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the therms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 *
 */

/**
 * An user as we believe it is in the database.
 * @author H.J.M van der Heijden <h.j.m.van.der.heijden@hva.nl>
 */
export class SamsUser {
    private userEmail: string;

    private userId: number;

    private userName: string;

    private userOrganizationId: number;

    public constructor(name: string, email: string, id: number, organizationId: number) {
        this.userName = name;
        this.userEmail = email;
        this.userId = id;
        this.userOrganizationId = organizationId;
    }

    public get name(): string {
        return this.userName;
    }

    public get email(): string {
        return this.userEmail;
    }

    public get id(): number {
        return this.userId;
    }

    public get organizationId(): number {
        return this.userOrganizationId;
    }
}
