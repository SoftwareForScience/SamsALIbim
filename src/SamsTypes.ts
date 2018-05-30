/**
 * An user as we believe it is in the database.
 */
export class SamsUser {
    private _name : string;
    private _email: string;
    
    private _id: number;
    private _organization_id: number;

    constructor(name : string, email: string,id: number, organization_id: number) {
        this._name;
        this._email = email;
        this._id = id;
        this._organization_id = organization_id;
    }

    get name() : string {
        return this._name;
    }

    get email() : string {
        return this._email;
    }

    get id() : number {
        return this._id;
    }

    get organization_id () : number {
        return this._organization_id;
    }
}

class Organization {
    private _organization_id: number;
    private _organization_name: string;
}

class Training {
    private user_id: number;
    private _training_name: string;
}