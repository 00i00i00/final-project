import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDateComponent } from './first-date.component';

describe('FirstDateComponent', () => {
  let component: FirstDateComponent;
  let fixture: ComponentFixture<FirstDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
