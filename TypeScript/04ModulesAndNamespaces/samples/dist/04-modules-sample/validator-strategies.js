export class RequiresValidator {
    constructor() {
        this.message = "Обязательное значение";
    }
    validate(value) {
        return value === "";
    }
    ;
}
export class NumberValidator {
    constructor() {
        this.message = "Значение должно быть числом";
    }
    validate(value) {
        return !/\d+/.test(value);
    }
}
;
export class EmailValidators {
    constructor() {
        this.message = "Значение должно быть email адресом";
    }
    validate(value) {
        return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
    }
}
;
//# sourceMappingURL=validator-strategies.js.map