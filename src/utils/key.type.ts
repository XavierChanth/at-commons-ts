enum AtKeyType {
    selfKey = 'selfKey',
    sharedKey = 'sharedKey',
    publicKey = 'publicKey',
    privateKey = 'privateKey',
    cachedPublicKey = 'cachedPublicKey',
    cachedSharedKey = 'cachedSharedKey',
    invalidKey = 'invalidKey'
}

enum ReservedKey {
    encryptionSharedKey = 'encryptionSharedKey',
    encryptionPublicKey = 'encryptionPublicKey',
    encryptionPrivateKey = 'encryptionPrivateKey',
    pkamPublicKey = 'pkamPublicKey',
    signingPrivateKey = 'signingPrivateKey',
    signingPublicKey = 'signingPublicKey',
    nonReservedKey = 'nonReservedKey'
}

enum RegexGroup {
    visibility = 'visibility',
    sharedWith = 'sharedWith',
    entity = 'entity',
    namespace = 'namespace',
    owner = 'owner',
}
