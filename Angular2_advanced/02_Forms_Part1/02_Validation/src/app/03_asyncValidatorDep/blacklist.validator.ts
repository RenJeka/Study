import { FormControl } from "@angular/forms";
import { BlackListService } from "./blacklist.service";

export function blackListValidator(service: BlackListService) {
    return (control: FormControl) => {
        return new Promise((resolve) => {
            service.checkEmail(control.value).then(
                (response) => {
                    if (response) {
                        resolve({
                            blackListValidator: {
                                blocked: true
                            }
                        })
                    } else {
                        resolve(null);
                    }
                },
                () => { console.error("Error loading black list"); })
        });
    }
}