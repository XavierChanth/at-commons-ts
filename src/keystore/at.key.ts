import { AtKeyError } from "../errors/at.error";
import { PublicKeyBuilder, PrivateKeyBuilder, SelfKeyBuilder, SharedKeyBuilder } from "./keys/keys";
import { Metadata } from "./metadata";

interface IAtKey {
    key?: string;
    sharedWith?: string | undefined;
    sharedBy?: string | undefined;
    namespace?: string | undefined;
    isRef: boolean;
    metadata?: Metadata | undefined;
}

export class AtKey implements IAtKey{
    key?: string;
    sharedWith?: string | undefined;
    sharedBy?: string | undefined;
    namespace?: string | undefined;
    isRef: boolean = false;
    metadata?: Metadata | undefined;

    public toAtKey(json: string): AtKey {
        return JSON.parse(json);
    }

    public toJson(): string {
        return JSON.stringify(this);
    }

    public public(key: string,
        namespace?: string, sharedBy?: string): PublicKeyBuilder {
        const _builder = new PublicKeyBuilder();
        _builder.key(key!);
        _builder.sharedBy(sharedBy!);
        _builder.namespace(namespace!);
        return _builder;
    }

    public private(key: string, namespace?: string): PrivateKeyBuilder {
        const _builder = new PrivateKeyBuilder();
        _builder.key(key);
        _builder.namespace(namespace!);
        return _builder;
    }

    public self(key: string,
        namespace?: string, sharedBy?: string): SelfKeyBuilder {
        const _builder = new SelfKeyBuilder();
        _builder.key(key!);
        _builder.sharedBy(sharedBy!);
        _builder.namespace(namespace!);
        return _builder;
    }

    public shared(key: string,
        namespace?: string, sharedBy?: string): SharedKeyBuilder {
        const _builder = new SharedKeyBuilder();
        _builder.key(key!);
        _builder.sharedBy(sharedBy!);
        _builder.namespace(namespace!);
        return _builder;
    }

    fromString(key: string): AtKey {
        const atKey = new AtKey();
        const metadata = new Metadata();
        if (key.startsWith(AT_PKAM_PRIVATE_KEY) ||
            key.startsWith(AT_PKAM_PUBLIC_KEY)) {
            atKey.key = key;
            atKey.metadata = metadata;
            return atKey;
        } else if (key.startsWith(AT_ENCRYPTION_PRIVATE_KEY)) {
            atKey.key = key.split('@')[0]!;
            atKey.sharedBy = key.split('@')[1] ?? undefined;
            atKey.metadata = metadata;
            return atKey;
        }
        //If key does not contain '@'. or key has space, it is not a valid key.
        if (!key.includes('@') || key.includes(' ')) {
            throw new AtKeyError(`${key} is not well-formed key`);
        }
        var keyParts = key.split(':');
        // If key does not contain ':' Ex: phone@bob; then keyParts length is 1
        // where phone is key and @bob is sharedBy
        if (keyParts.length == 1) {
            atKey.sharedBy = keyParts[0]?.split('@')[1];
            atKey.key = keyParts[0]?.split('@')[0]!;
        } else {
            // Example key: public:phone@bob
            if (keyParts[0] == 'public') {
                metadata.isPublic = true;
            }
            // Example key: cached:@alice:phone@bob
            else if (keyParts[0] == CACHED) {
                metadata.isCached = true;
                atKey.sharedWith = keyParts[1];
            } else {
                atKey.sharedWith = keyParts[0];
            }
            let keyArr: string[] = [];
            if (keyParts[0] == CACHED) {
                keyArr = keyParts[2]?.split('@')!;
            } else {
                keyArr = keyParts[1]?.split('@')!;
            }
            if (keyArr.length == 2) {
                atKey.sharedBy = keyArr[1];
                atKey.key = keyArr[0]!;
            } else {
                atKey.key = keyArr[0]!;
            }
        }
        //remove namespace
        if (atKey.key != null && atKey.key!.includes('.')) {
            var namespaceIndex = atKey.key!.lastIndexOf('.');
            if (namespaceIndex > -1) {
                atKey.namespace = atKey.key!.substring(namespaceIndex + 1);
                atKey.key = atKey.key!.substring(0, namespaceIndex);
            }
        } else {
            metadata.namespaceAware = false;
        }
        atKey.metadata = metadata;
        return atKey;
    }
}
