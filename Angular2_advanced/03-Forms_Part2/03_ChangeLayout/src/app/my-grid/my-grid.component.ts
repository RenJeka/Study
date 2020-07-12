import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { Contact } from "../shared/contact";
import { ContactService } from "../shared/contact.service";

@Component({
  selector: 'my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css'],
  providers: [ContactService]
})
export class MyGridComponent implements OnInit {
  @ViewChild('displayTmpl') displayTmpl: TemplateRef<any>;
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  contacts: Contact[];
  selected: Contact;

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (result) => this.contacts = result,
      (error) => console.error(error)
    )
  }
  constructor(private service: ContactService) { }

  getTemplate(contact) {
    return this.selected && this.selected.id == contact.id ? this.editTmpl : this.displayTmpl;
  }

  editContact(contact) {
    this.selected = Object.assign({}, contact);
  }

  saveContact() {
    this.service.update(this.selected);
    this.reset();
  }

  reset() {
    this.selected = null;
  }

}
