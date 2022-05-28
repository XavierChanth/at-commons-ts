interface IMetaData {
    ttl?: number;
    ttb?: number;
    ttr?: number;
    ccd?: boolean;
    availableAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    expiresAt?: Date;
    refreshAt?: Date;
    dataSignature?: string;
    sharedkeyStatus?: string;
    isPublic: boolean;
    isHidden: boolean;
    namespaceAware: boolean;
    isBinary: boolean;
    isEncrypted?: boolean;
    isCached: boolean;
    sharedKeyEnc?: string;
    pubKeyCS?: string;
}

export class Metadata implements IMetaData {
    ttl?: number;
    ttb?: number;
    ttr?: number;
    ccd?: boolean;
    availableAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    expiresAt?: Date;
    refreshAt?: Date;
    dataSignature?: string;
    sharedkeyStatus?: string;
    isPublic: boolean = false;
    isHidden: boolean = false;
    namespaceAware: boolean = true;
    isBinary: boolean = false;
    isEncrypted?: boolean;
    isCached: boolean = false;
    sharedKeyEnc?: string;
    pubKeyCS?: string;

    public toMetaData(json: string): Metadata {
        return JSON.parse(json);
    }

    public toJson(): string {
        return JSON.stringify(this);
    }
}