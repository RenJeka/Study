import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1ViewComponent } from './feature1-view.component';

describe('Feature1ViewComponent', () => {
  let component: Feature1ViewComponent;
  let fixture: ComponentFixture<Feature1ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
