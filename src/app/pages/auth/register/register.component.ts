import { Component } from '@angular/core';
import { HOME } from '../../../core/models/constants-routing';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../login/login-form/login-form.component';
import { RouterLink } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent , RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
       HOME_ROUTER = "../"  +  HOME.ROOT;
}
