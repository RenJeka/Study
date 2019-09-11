/*
 triple slash reference
 используется как директива для компилятора и считается валидной только если определена в начале файла
 данный синтаксис используется для определения зависимостей между файлами. Так как в данном файле используется
 пространство имен Validation, которое находится в файле validation.ts, директива указывает компилятору, что файл validation.ts
 должен использоваться при компиляции текущего файла main.ts
*/

/// <reference path="validator.ts" />

namespace NamespaceFilesSample {

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

    // определение правил проверки объекта
    let config = {
        firstName: "required",
        lastName: "required",
        age: "number",
        email: "email"
    };

    export function run() {
        let validator = new Validation.Validator(config);
        let result: Validation.ValidationResult = validator.validate(data1);
        console.log(result.valid); // true
        console.log(result.errors);

        result = validator.validate(data2);
        console.log(result.valid); // false
        console.log(result.errors);
    }
}

NamespaceFilesSample.run();

