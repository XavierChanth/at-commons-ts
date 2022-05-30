import { VerbUtil } from "../../utils/verb.utils/verb.util";
import { AtKey } from "../at.key";
import { Metadata } from "../metadata";
import { CachedKeyBuilder } from "./cached.key";

/**
 * Represents a public key.
 */
export class PublicKey extends AtKey {
    constructor() {
        super();
        this.metadata = new Metadata();
        this.metadata!.isPublic = true;
    }

    override toString(): string {
        this.sharedBy = VerbUtil.formatAtSign(this.sharedBy);
        return `public:${this.key}.${this.namespace}${this.sharedBy}`;
    }
}

/**
 * Builder class to build the public keys
 */
export class PublicKeyBuilder extends CachedKeyBuilder {
    constructor() {
        super();
        this._atKey = new PublicKey();
        this._metaData.isPublic = true;
        this._metaData.isHidden = false;
    }

    cache(ttr: number, ccd: boolean): void {
        this._metaData.ttr = ttr;
        this._metaData.ccd = ccd;
        this._metaData.isCached = (ttr != 0);
    }
}
