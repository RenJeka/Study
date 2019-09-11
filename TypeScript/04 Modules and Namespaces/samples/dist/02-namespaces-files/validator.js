/// <reference path="validator-selector.ts" />
var Validation;
(function (Validation) {
    class Validator {
        constructor(config) {
            this.config = config;
            Validation.ValidatorSelector.initialize();
        }
        validate(data) {
            let messages = [];
            for (let propertyName in data) {
                if (data.hasOwnProperty(propertyName)) {
                    let validatorName = this.config[propertyName];
                    if (!validatorName) {
                        continue;
                    }
                    let validator = Validation.ValidatorSelector.select(validatorName);
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
    Validation.Validator = Validator;
    ;
    class ValidationResult {
    }
    Validation.ValidationResult = ValidationResult;
})(Validation || (Validation = {}));
//# sourceMappingURL=validator.js.map