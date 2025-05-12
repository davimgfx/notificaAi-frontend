import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AUTH } from '../../../../core/models/constants-routing';
import { RouterLink } from '@angular/router';
import { RegisterStepComponent } from './register-steps/register-step/register-step.component';
import { RegisterConfirmStepComponent } from './register-steps/register-confirm-step/register-confirm-step.component';

@Component({
    selector: 'app-register-form',
    imports: [CommonModule, RouterLink, RegisterConfirmStepComponent, RegisterStepComponent ],
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

