import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1Component } from './my-comp1.component';

describe('MyComp1Component', () => {
  let component: MyComp1Component;
  let fixture: ComponentFixture<MyComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
