import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2ViewComponent } from './feature2-view.component';

describe('Feature2ViewComponent', () => {
  let component: Feature2ViewComponent;
  let fixture: ComponentFixture<Feature2ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
