export class SamsException {
    private message : string;
    constructor(msg: string) {
        this.message = msg;
    }

    get msg () : string {
        return this.message;
    }
}

export class SamsNotImplementedException extends SamsException {
    constructor(msg: string) {
        super(msg);
    }
}

export default {SamsException, SamsNotImplementedException}