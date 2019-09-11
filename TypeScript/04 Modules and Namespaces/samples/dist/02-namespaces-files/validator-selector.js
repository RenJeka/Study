/// <reference path="validator-strategies.ts" />
var Validation;
(function (Validation) {
    class ValidatorSelector {
        static initialize() {
            ValidatorSelector.validators["required"] = new Validation.RequiresValidator();
            ValidatorSelector.validators["number"] = new Validation.NumberValidator();
            ValidatorSelector.validators["email"] = new Validation.EmailValidators();
            ValidatorSelector.initialize = () => { }; // для избежания повторной инициализации
        }
        static select(name) {
            let validator = ValidatorSelector.validators[name];
            if (validator) {
                return validator;
            }
            else {
                throw new Error("Не найден валидатор " + name);
            }
        }
    }
    ValidatorSelector.validators = {};
    Validation.ValidatorSelector = ValidatorSelector;
})(Validation || (Validation = {}));
//# sourceMappingURL=validator-selector.js.map