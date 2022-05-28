import { AtKey } from "../at.key";
import { AtKeyBuilder } from "../builder/key.builder";
import { Metadata } from "../metadata";

export class SelfKey extends AtKey {
    constructor() {
        super();
        this.metadata = new Metadata();
        this.metadata!.isPublic = false;
    }

    override toString(): string {
        // If sharedWith is populated and sharedWith is equal to sharedBy, then
        // keys is a self key.
        // @alice:phone@alice or phone@alice
        if (this.sharedWith != null && this.sharedWith!.isNotEmpty) {
            return `${this.sharedWith}:${this.key}.${this.namespace}${this.sharedBy}`;
        }
        return `${this.key}.${this.namespace}${this.sharedBy}`;
    }
}


export class SelfKeyBuilder extends AtKeyBuilder {
    constructor() {
        super()
        this._atKey = new SelfKey();
        this._metaData.isPublic = false;
        this._metaData.isHidden = false;
    }
}