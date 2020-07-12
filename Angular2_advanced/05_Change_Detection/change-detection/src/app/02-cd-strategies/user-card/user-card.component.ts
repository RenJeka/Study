import { Component, DoCheck, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements DoCheck {

  static doCheckCounter: number = 0;  
  @Input() currentUser: User;
  checkPosition: number = 0;

  constructor() {
  }

  // Метод ngDoCheck будет срабатывать даже если установлена стратегия отслеживания изменений onPush 
  // и input свойства не изменялись
  ngDoCheck() {
    this.checkPosition = UserCardComponent.doCheckCounter;
    UserCardComponent.doCheckCounter ++;
    console.log("check " + this.currentUser.name);
  }

  // Обработчик события запустит отслеживание изменений, даже если не изменялось input свойство
  refresh() {
  }
}