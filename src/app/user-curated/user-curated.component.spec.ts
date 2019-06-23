import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCuratedComponent } from './user-curated.component';

describe('UserCuratedComponent', () => {
  let component: UserCuratedComponent;
  let fixture: ComponentFixture<UserCuratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCuratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCuratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
