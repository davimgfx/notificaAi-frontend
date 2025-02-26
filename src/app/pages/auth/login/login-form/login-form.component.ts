import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { InputComponent } from "../../../../shared/components/inputs/input/input.component";
import { InputOTPComponent } from "../../../../shared/components/inputs/input-otp/input-otp.component";
import { AUTH } from '../../../../core/models/constants-routing';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonComponent, InputComponent, InputOTPComponent, RouterLink, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
     REGISTER_ROUTER = "../" + AUTH.REGISTER;
     form_step = 1;

     nextStep(){
        this.form_step++;
     }

     backStep(){
        this.form_step--;
     }
}
