import { Validator, ValidationResult } from "./validator";

let data1 = {
    firstName: "Ivan",
    lastName: "Ivaonv",
    age: 25,
    email: "ivanov@example.com"
};

let data2 = {
    firstName: "Ivan",
    lastName: "",
    age: "qwe",
    email: "example"
};

// настройки объекта для проверки 
let config = {
    firstName: "required",
    lastName: "required",
    age: "number",
    email: "email"
};

let validator = new Validator(config);
let result: ValidationResult = validator.validate(data1);
console.log(result.valid); // true
console.log(result.errors);

result = validator.validate(data2);
console.log(result.valid); // false
console.log(result.errors);
