import { VerbUtil } from "../../utils";
import { AtKey, Metadata } from "..";

/**
 * Represents a public key.
 */
export class PublicKey extends AtKey {
    constructor() {
        super();
        this.metadata = new Metadata();
        this.metadata!.isPublic = true;
    }

    toString(): string {
        this.sharedBy = VerbUtil.formatAtSign(this.sharedBy!)!;
        return `public:${this.key}.${this.namespace}${this.sharedBy}`;
    }
}


