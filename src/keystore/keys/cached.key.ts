import { AtKeyBuilder } from "../builder/key.builder";

export abstract class CachedKeyBuilder extends AtKeyBuilder {
    constructor() {
        super();
    }

    abstract cache(ttr: number, ccd: boolean): void;
}
