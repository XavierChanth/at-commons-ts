/// Implement a validation on a key
export abstract class Validation {
    abstract doValidate(): ValidationResult;
}

/// Validates String representation of a [AtKey]
/// For example String representation of a public key [PublicKey] will be public:phone.wavi@bob
export abstract class AtKeyValidator {
    abstract validate(key: string, context: ValidationContext): ValidationResult;
}

/// Represents context of a validation
/// See [AtKeyValidator]
export class ValidationContext {
    // Set it to the currentAtSign
    atSign?: string | null;

    // It is being set in _initParams
    type?: AtKeyType | null;

    // validate the ownership of the key
    validateOwnership: boolean = true;
}

/**
 *  Represents outcome of a key validation
 * See @AtKeyValidator and @AtConcreteKeyValidator
 */
export class ValidationResult {
    isValid: boolean = false;
    failureReason: string = '';

    constructor(failureReason: string) {
        this.failureReason = failureReason;
    }

    public static noFailure(): ValidationResult {
        const _validationResult: ValidationResult = new ValidationResult('');
        _validationResult.isValid = true;
        return _validationResult;
    }
}