import { ValidatorSelector } from "./validator-selector.js";
export class Validator {
    constructor(config) {
        this.config = config;
        ValidatorSelector.initialize();
    }
    validate(data) {
        let messages = [];
        for (let propertyName in data) {
            if (data.hasOwnProperty(propertyName)) {
                let validatorName = this.config[propertyName];
                if (!validatorName) {
                    continue;
                }
                let validator = ValidatorSelector.select(validatorName);
                let invalid = validator.validate(data[propertyName]);
                if (invalid) {
                    let message = "Не правильное значение для " + propertyName + ", " + validator.message;
                    messages.push(message);
                }
            }
        }
        return {
            valid: messages.length == 0,
            errors: messages
        };
    }
}
;
export class ValidationResult {
}
//# sourceMappingURL=validator.js.map