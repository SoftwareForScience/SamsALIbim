
import SamsSettings from './SamsSettings';
import SamsDriver from './SamsDriver';

export class Sams  {
    private _settings : SamsSettings;
    private _driver : SamsDriver;

    constructor(settings: SamsSettings, driver: SamsDriver) {
        this._settings = settings;
    }

    get settings  () : SamsSettings {
        return this._settings
    }


}

export default Sams;