import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginApplicantComponent } from './login-applicant.component';

describe('LoginApplicantComponent', () => {
  let component: LoginApplicantComponent;
  let fixture: ComponentFixture<LoginApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
