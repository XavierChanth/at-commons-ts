import { AtError } from "../../errors/at.error";
import { AtKey } from "../at.key";
import { Metadata } from "../metadata";
import { CachedKeyBuilder } from "./cached.key";

export class SharedKey extends AtKey {
    constructor() {
        super();
        this.metadata = new Metadata();
    }

    override toString(): string {
        return `${this.sharedWith}:${this.key}.${this.namespace}${this.sharedBy}`;
    }
}

/// Builder to build the shared keys
export class SharedKeyBuilder extends CachedKeyBuilder {
    constructor() {
        super();
        this._atKey = new SharedKey();
        this._metaData.isPublic = false;
        this._metaData.isHidden = false;
    }

    cache(ttr: number, ccd: boolean): void {
        this._metaData.ttr = ttr;
        this._metaData.ccd = ccd;
        this._metaData.isCached = (ttr != 0);
    }

    /// Accepts a string which represents an atSign for the key is created.
    sharedWith(sharedWith: string): void {
        sharedWith = sharedWith.trim();
        this._atKey.sharedWith = sharedWith;
    }

    override validate(): void {
        //Call AbstractKeyBuilder validate method to perform the common validations.
        super.validate();
        if (this._atKey.sharedWith == null || this._atKey.sharedWith!.isEmpty) {
            throw new AtError('sharedWith cannot be empty', 'SharedKeyBuilder');
        }
    }
}