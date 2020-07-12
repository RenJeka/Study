import { Component, DoCheck, OnChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedComponent implements DoCheck, OnChanges {

  @Input() settings;
  id: number;

  // ChangeDetectorRef - ChangeDetector, который привязан к отдельному компоненту и выполняет операции отслеживания изменений.
  constructor(private cd: ChangeDetectorRef) { }

  ngOnChanges() {
    this.id = this.settings.id;
  }

  // Стратегия текущего компонента OnPush
  // Значения свойств объекта в settings будут изменяться но ссылка останется прежней
  // Метод ngDoCheck будет срабатывать постоянно, даже если не менялось input свойство
  // Это позволит самостоятельно отследить изменения и обновить текущий компонент если это потребуется
  ngDoCheck() {
    if(this.id != this.settings.id) {
      this.id = this.settings.id;
      this.cd.markForCheck(); // обновить view
    }
  }
}


