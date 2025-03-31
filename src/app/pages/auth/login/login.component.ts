import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HOME } from '../../../core/models/constants-routing';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    imports: [RouterLink, CommonModule, LoginFormComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    HOME_ROUTER = '../' + HOME.ROOT;
}
