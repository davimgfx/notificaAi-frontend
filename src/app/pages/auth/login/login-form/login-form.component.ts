import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputOTPComponent } from '../../../../shared/components/inputs/input-otp/input-otp.component';
import { AUTH } from '../../../../core/models/constants-routing';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginFirstStepComponent } from './login-steps/login-first-step/login-first-step.component';

@Component({
  selector: 'app-login-form',
  imports: [
    ButtonComponent,
    CommonModule,
    InputOTPComponent,
    RouterLink,
    CommonModule,
    LoginFirstStepComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  REGISTER_ROUTER = '../' + AUTH.REGISTER;
  form_step = 1;

  nextStep() {
    this.form_step++;
  }

  backStep() {
    this.form_step--;
  }
}
