import { AtKeyBuilder } from ".";
import { SelfKey } from "../keys";

/**
 * Builder class to build the self keys
 */
export class SelfKeyBuilder extends AtKeyBuilder {
    constructor() {
        super()
        this._atKey = new SelfKey();
        this._metaData.isPublic = false;
        this._metaData.isHidden = false;
    }
}