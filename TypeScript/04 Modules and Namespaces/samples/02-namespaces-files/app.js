var Validation;
(function (Validation) {
    var RequiresValidator = /** @class */ (function () {
        function RequiresValidator() {
            this.message = "Обязательное значение";
        }
        RequiresValidator.prototype.validate = function (value) {
            return value === "";
        };
        ;
        return RequiresValidator;
    }());
    Validation.RequiresValidator = RequiresValidator;
    var NumberValidator = /** @class */ (function () {
        function NumberValidator() {
            this.message = "Значение должно быть числом";
        }
        NumberValidator.prototype.validate = function (value) {
            return !/\d+/.test(value);
        };
        return NumberValidator;
    }());
    Validation.NumberValidator = NumberValidator;
    ;
    var EmailValidators = /** @class */ (function () {
        function EmailValidators() {
            this.message = "Значение должно быть email адресом";
        }
        EmailValidators.prototype.validate = function (value) {
            return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
        };
        return EmailValidators;
    }());
    Validation.EmailValidators = EmailValidators;
    ;
})(Validation || (Validation = {}));
/// <reference path="validator-strategies.ts" />
var Validation;
(function (Validation) {
    var ValidatorSelector = /** @class */ (function () {
        function ValidatorSelector() {
        }
        ValidatorSelector.initialize = function () {
            ValidatorSelector.validators["required"] = new Validation.RequiresValidator();
            ValidatorSelector.validators["number"] = new Validation.NumberValidator();
            ValidatorSelector.validators["email"] = new Validation.EmailValidators();
            ValidatorSelector.initialize = function () { }; // для избежания повторной инициализации
        };
        ValidatorSelector.select = function (name) {
            var validator = ValidatorSelector.validators[name];
            if (validator) {
                return validator;
            }
            else {
                throw new Error("Не найден валидатор " + name);
            }
        };
        ValidatorSelector.validators = {};
        return ValidatorSelector;
    }());
    Validation.ValidatorSelector = ValidatorSelector;
})(Validation || (Validation = {}));
/// <reference path="validator-selector.ts" />
var Validation;
(function (Validation) {
    var Validator = /** @class */ (function () {
        function Validator(config) {
            this.config = config;
            Validation.ValidatorSelector.initialize();
        }
        Validator.prototype.validate = function (data) {
            var messages = [];
            for (var propertyName in data) {
                if (data.hasOwnProperty(propertyName)) {
                    var validatorName = this.config[propertyName];
                    if (!validatorName) {
                        continue;
                    }
                    var validator = Validation.ValidatorSelector.select(validatorName);
                    var invalid = validator.validate(data[propertyName]);
                    if (invalid) {
                        var message = "Не правильное значение для " + propertyName + ", " + validator.message;
                        messages.push(message);
                    }
                }
            }
            return {
                valid: messages.length == 0,
                errors: messages
            };
        };
        return Validator;
    }());
    Validation.Validator = Validator;
    ;
    var ValidationResult = /** @class */ (function () {
        function ValidationResult() {
        }
        return ValidationResult;
    }());
    Validation.ValidationResult = ValidationResult;
})(Validation || (Validation = {}));
/*
 triple slash reference
 используется как директива для компилятора и считается валидной только если определена в начале файла
 данный синтаксис используется для определения зависимостей между файлами. Так как в данном файле используется
 пространство имен Validation, которое находится в файле validation.ts, директива указывает компилятору, что файл validation.ts
 должен использоваться при компиляции текущего файла main.ts
*/
/// <reference path="validator.ts" />
var NamespaceFilesSample;
(function (NamespaceFilesSample) {
    var data1 = {
        firstName: "Ivan",
        lastName: "Ivaonv",
        age: 25,
        email: "ivanov@example.com"
    };
    var data2 = {
        firstName: "Ivan",
        lastName: "",
        age: "qwe",
        email: "example"
    };
    // определение правил проверки объекта
    var config = {
        firstName: "required",
        lastName: "required",
        age: "number",
        email: "email"
    };
    function run() {
        var validator = new Validation.Validator(config);
        var result = validator.validate(data1);
        console.log(result.valid); // true
        console.log(result.errors);
        result = validator.validate(data2);
        console.log(result.valid); // false
        console.log(result.errors);
    }
    NamespaceFilesSample.run = run;
})(NamespaceFilesSample || (NamespaceFilesSample = {}));
NamespaceFilesSample.run();
