import { Component } from '@angular/core';
import { HOME } from '../../../core/models/constants-routing';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
    selector: 'app-register',
    imports: [CommonModule, RegisterFormComponent, RouterLink],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
       HOME_ROUTER = "../"  +  HOME.ROOT;
}
