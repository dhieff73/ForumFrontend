import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSignupComponent } from './guest-signup.component';

describe('GuestSignupComponent', () => {
  let component: GuestSignupComponent;
  let fixture: ComponentFixture<GuestSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
