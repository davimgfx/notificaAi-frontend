import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AUTH } from '../../../../core/models/constants-routing';
import { RouterLink } from '@angular/router';
import { InputComponent } from "../../../../shared/components/inputs/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { InputOTPComponent } from "../../../../shared/components/inputs/input-otp/input-otp.component";
import { ReactiveFormsModule } from '@angular/forms';
import { createAccountForm } from './register-form-constants';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule, RouterLink, InputComponent, ButtonComponent, InputOTPComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {
    LOGIN_ROUTER = "../" + AUTH.LOGIN;
    form_step = 1;

    createUserForm = createAccountForm()

    nextStep(){
        this.form_step++;
    }

    backStep(){
        this.form_step--;
    }

    submitCreateUserForm(){
        console.log(this.createUserForm.value)
    }
}
