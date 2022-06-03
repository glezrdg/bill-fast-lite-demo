import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSignupComponent } from './c-signup.component';

describe('CSignupComponent', () => {
  let component: CSignupComponent;
  let fixture: ComponentFixture<CSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
