import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOAKComponent } from './one-oak.component';

describe('FilterComponent', () => {
  let component: OneOAKComponent;
  let fixture: ComponentFixture<OneOAKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneOAKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
