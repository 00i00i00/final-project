import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDateComponent } from './last-date.component';

describe('EventsComponent', () => {
  let component: LastDateComponent;
  let fixture: ComponentFixture<LastDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
