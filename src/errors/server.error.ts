import { AtError } from "./at.error";

export class AtServerError extends AtError {
    constructor(message: string) {
        super(message);
    }
}

/// Thrown when current server's inbound connection limit is reached
export class InboundConnectionLimitError extends AtServerError {
    constructor(message: string) {
        super(message);
    }
}

/// Thrown when current server's outbound connection limit is reached
export class OutboundConnectionLimitError extends AtServerError {
    constructor(message: string) {
        super(message)
    };
}

export class BlockedConnectionError extends AtServerError {
    constructor(message: string) {
        super(message)
    };
}

/// Thrown when lookup fails after handshake
export class LookupError extends AtServerError {
    constructor(message: string) {
        super(message)
    };
}

/// Thrown for any unhandled server Error
export class InternalServerError extends AtServerError {
    constructor(message: string) {
        super(message)
    };
}

/// This exception is used for any server related exceptions.
export class InternalServerException extends AtServerError {
    constructor(message: string) {
        super(message)
    };
}
