import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/components/inputs/input/input.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { RouterLink } from '@angular/router';
import { InputOTPComponent } from "../../../shared/components/inputs/input-otp/input-otp.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { HOME } from '../../../core/models/constants-routing';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    imports: [RouterLink, CommonModule, LoginFormComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    HOME_ROUTER = "../"  +  HOME.ROOT;
}
