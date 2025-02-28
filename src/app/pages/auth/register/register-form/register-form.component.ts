import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AUTH } from '../../../../core/models/constants-routing';
import { RouterLink } from '@angular/router';
import { InputComponent } from "../../../../shared/components/inputs/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { InputOTPComponent } from "../../../../shared/components/inputs/input-otp/input-otp.component";
import { ReactiveFormsModule } from '@angular/forms';
import { createAccountForm, hasErrorForm } from './register-form-constants';
import { CustomValidationMessagesComponent } from "../../../../shared/components/custom-validation-messages/custom-validation-messages.component";
import { RegisterFirstStepComponent } from "./register-steps/register-first-step/register-first-step.component";
import { RegisterSecondStepComponent } from "./register-steps/register-second-step/register-second-step.component";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RegisterFirstStepComponent, RegisterSecondStepComponent],
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
        if (this.createUserForm.valid) {
            this.nextStep();
            console.log(this.form_step);
        }

        Object.values(this.createUserForm.controls).forEach((control) => {
            if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
            }
        });
        
    }

     hasErrorFormFunc(controlName : string) {
        return hasErrorForm(this.createUserForm, controlName);
     }
}

