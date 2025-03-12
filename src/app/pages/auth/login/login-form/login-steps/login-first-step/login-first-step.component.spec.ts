import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFirstStepComponent } from './login-first-step.component';

describe('LoginFirstStepComponent', () => {
  let component: LoginFirstStepComponent;
  let fixture: ComponentFixture<LoginFirstStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFirstStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
