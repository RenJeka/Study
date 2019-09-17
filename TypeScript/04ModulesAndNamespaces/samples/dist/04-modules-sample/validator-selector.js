import { RequiresValidator, NumberValidator, EmailValidators } from "./validator-strategies.js";
export class ValidatorSelector {
    static initialize() {
        ValidatorSelector.validators["required"] = new RequiresValidator();
        ValidatorSelector.validators["number"] = new NumberValidator();
        ValidatorSelector.validators["email"] = new EmailValidators();
        ValidatorSelector.initialize = () => { };
    }
    static select(name) {
        let validator = ValidatorSelector.validators[name];
        if (validator) {
            return validator;
        }
        else {
            throw Error("Не найден валидатор " + name);
        }
    }
}
ValidatorSelector.validators = {};
//# sourceMappingURL=validator-selector.js.map