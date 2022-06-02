import { VerbUtil } from "../../utils/verb.utils/verb.util";
import { AtKey } from "../at-key";
import { AtKeyBuilder } from "../builder/key.builder";
import { Metadata } from "../metadata";
import './../../utils/ext.util';

export class SelfKey extends AtKey {
    constructor() {
        super();
        this.metadata = new Metadata();
        this.metadata!.isPublic = false;
    }

    toString(): string {
        // If sharedWith is populated and sharedWith is equal to sharedBy, then
        // keys is a self key.
        // @alice:phone@alice or phone@alice
        if (this.sharedWith != null && this.sharedWith!.isNotEmpty()) {
            this.sharedBy = VerbUtil.formatAtSign(this.sharedBy!)!;
            return `${this.sharedWith}:${this.key}.${this.namespace}${this.sharedBy}`;
        }
        this.sharedBy = VerbUtil.formatAtSign(this.sharedBy!)!;
        return `${this.key}.${this.namespace}${this.sharedBy}`;
    }
}


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