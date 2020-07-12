import { Component } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-cd-strategies-sample',
  templateUrl: './cd-strategies-sample.component.html',
  styleUrls: ['./cd-strategies-sample.component.css']
})
export class CdStrategiesSampleComponent {

  users: User[] = [
    new User("Patrick Sampson", "patrick.sampson@liquidoc.ca"),
    new User("Bowers Livingston", "bowers.livingston@exoswitch.bi"),
    new User("Leonard Daniel", "leonard.daniel@dogtown.net")
  ];

  test() {
    console.log("test");
  }

  chnageAllValues() {
    for (let i = 0; i < this.users.length; ++i) {
      this.users[i].name += "1";
    }
  }

  chnageFirstValue() { 
    this.users[0].name += "2";
  }

  chnageFirstReference() { 
    this.users[0] = new User("Test", "Test");
  }

}
