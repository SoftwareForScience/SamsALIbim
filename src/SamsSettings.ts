export class SamsSettings {
    private _connectionToken: string;
    
    private _connectionURL: string;
    
    private _dbConcurrency: number;

    private _databasePort: number;

    private _databaseUser: string;

    private _databaseName: string;

    constructor(
        connectionToken: string,
        connectionURL: string,
        dbConcurrency: number,
        databasePort: number,
        databaseUser: string,
        databaseName: string
     ) {
         this._connectionToken = connectionToken;
         this._connectionURL = connectionURL;
         this._dbConcurrency = dbConcurrency;
         this._databaseUser = databaseUser;
         this._databasePort = databasePort;
         this._databaseName = databaseName;
        }

    get databaseName () : string {
        return this._databaseName;
    }

    get databasePort () :  number {
        return this._databasePort;
    }

    get databaseUser () : string {
        return this._databaseUser;
    }

    get connectionToken() : string {
        return this._connectionToken;
    }

    get connectionURL() : string {
        return this._connectionURL;
    }

    get DBConcurrency() : number {
        return this._dbConcurrency;
    }

}

export default SamsSettings;