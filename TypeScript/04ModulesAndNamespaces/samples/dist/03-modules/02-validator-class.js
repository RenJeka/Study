// import { Validator, CreditCardValidator } from "01-validators"; // импорт нескольких типов 
class PhoneNumberValidator {
    validate(value) {
        return true;
    }
}
let phoneVal = new PhoneNumberValidator();
console.log(phoneVal.validate("000-00-00"));
//# sourceMappingURL=02-validator-class.js.map