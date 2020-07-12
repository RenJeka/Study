import { FormControl, ValidationErrors } from "@angular/forms";

export function asyncEmailValidator(control: FormControl) {
    return new Promise(resolve => { // возврат Promise
        console.log("start validating")
        setTimeout(() => {
            let emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
            let value = control.value;

            let result = emailRegex.test(value);

            if (result) {
                console.log("validated");
                resolve(null); // ошибок при асинхронной валидации нет
            } else {
                console.log("error");

                resolve({ // найдена ошибка при асинхронной валидации
                    "asyncEmailValidator": {
                        valid: false
                    }
                });
            }
        }, 5000)
    });
}