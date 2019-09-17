var Validation;
(function (Validation) {
    class RequiresValidator {
        constructor() {
            this.message = "Обязательное значение";
        }
        validate(value) {
            return value === "";
        }
        ;
    }
    Validation.RequiresValidator = RequiresValidator;
    class NumberValidator {
        constructor() {
            this.message = "Значение должно быть числом";
        }
        validate(value) {
            return !/\d+/.test(value);
        }
    }
    Validation.NumberValidator = NumberValidator;
    ;
    class EmailValidators {
        constructor() {
            this.message = "Значение должно быть email адресом";
        }
        validate(value) {
            return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
        }
    }
    Validation.EmailValidators = EmailValidators;
    ;
})(Validation || (Validation = {}));
//# sourceMappingURL=validator-strategies.js.map