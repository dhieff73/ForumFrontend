import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerNavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: OwnerNavbarComponent;
  let fixture: ComponentFixture<OwnerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
