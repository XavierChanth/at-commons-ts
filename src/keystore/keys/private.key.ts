import { AtKey } from "../at.key";
import { AtKeyBuilder } from "../builder/key.builder";
import { Metadata } from "../metadata";

/**
 * Represents a Private key.
 */
export class PrivateKey extends AtKey {
    constructor() {
        super();
        this.metadata = new Metadata();
    }

    override toString(): string {
        return `privatekey:${this.key}`;
    }
}

/**
 * Builder to build the hidden keys
 */
export class PrivateKeyBuilder extends AtKeyBuilder {
    constructor() {
        super();
        this._atKey = new PrivateKey();
        this._metaData.isHidden = true;
        this._metaData.isPublic = false;
    }
}