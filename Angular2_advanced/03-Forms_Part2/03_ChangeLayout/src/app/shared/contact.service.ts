import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Contact } from "./contact";

@Injectable()
export class ContactService {

    private contacts: Contact[] = [{
        id: 1,
        name: "Contact 1",
        age: 28
    }, {
        id: 2,
        name: "Contact 2",
        age: 24
    }, {
        id: 3,
        name: "Contact 3",
        age: 32
    }, {
        id: 4,
        name: "Contact 4",
        age: 40
    }];

    getAll(): Observable<Contact[]> {
        console.log("get all contacts");
        return new Observable(subscriber => {
            setTimeout(() => { subscriber.next(this.contacts) }, 2000);
        });
    }

    update(contact: Contact) {
        console.log("save contact");
        let index: number = this.contacts.findIndex(x => x.id == contact.id);
        Object.assign(this.contacts[index], contact);
    }
}