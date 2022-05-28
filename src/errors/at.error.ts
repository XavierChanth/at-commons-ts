import { errorCodes } from "./at.error.codes";

export class AtError implements Error {
    name!: string;
    message!: string;
    cause?: Error;
    errorCode?: string;

    constructor(message: string, stack?: string) {
        this.message = message;
        this.cause = new Error(stack);
    }

    public toString = (): string => `${this.constructor.name}: ${errorCodes.get(this.constructor.name) ?? ''} - ${this.message}`;
}

class AtClientError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

class AtEncryptionError extends AtClientError {
    constructor(message: string) {
        super(message);
    }
}

export class AtConnectionError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class DataStoreError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class InvalidSyntaxError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class SocketError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class BufferOverFlowError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class SecondaryNotFoundError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class HandShakeError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class UnAuthorizedError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class SecondaryConnectError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class IllegalArgumentError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class AtTimeoutError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

export class UnAuthenticatedError extends AtError {
    constructor(message: string) {
        super(message);
    }
}


export class AtKeyError extends AtClientError {
    constructor(message: string) {
        super(message);
    }
}

export class AtValueError extends AtClientError {
    constructor(message: string) {
        super(message);
    }
}

export class AtPublicKeyChangeError extends AtEncryptionError {
    constructor(message: string) {
        super(message);
    }
}

export class AtPublicKeyNotFoundError extends AtEncryptionError {
    constructor(message: string) {
        super(message);
    }
}

export class AtDecryptionError extends AtClientError {
    constructor(message: string) {
        super(message);
    }
}
