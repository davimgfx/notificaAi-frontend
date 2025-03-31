import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AUTH } from '../../../../core/models/constants-routing';
import { RouterLink } from '@angular/router';
import { RegisterFirstStepComponent } from "./register-steps/register-first-step/register-first-step.component";
import { RegisterSecondStepComponent } from "./register-steps/register-second-step/register-second-step.component";

@Component({
    selector: 'app-register-form',
    imports: [CommonModule, RouterLink, RegisterFirstStepComponent, RegisterSecondStepComponent],
    templateUrl: './register-form.component.html',
    styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {
    LOGIN_ROUTER = "../" + AUTH.LOGIN;
    form_step = 1;


    nextStep(){
        this.form_step++;
    }

    backStep(){
        this.form_step--;
    }
}

