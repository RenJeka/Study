import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ElementBase } from "../model/element-base";

@Injectable()
export class ElementsService {

    constructor() { }

    toFormGroup(elements: ElementBase<any>[]) {
        let group: any = {};

        elements.forEach(element => {
            group[element.key] = element.required ? new FormControl(element.value || "", Validators.required)
                                                  : new FormControl(element.value || "");
        });

        return new FormGroup(group);
    }

}