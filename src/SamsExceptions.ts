/**
 * Default exception that is parent thrown by all the SAMS exceptions
 * @author H.J.M van der Heijden <h.j.m.van.der.heijden@hva.nl>
 */
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