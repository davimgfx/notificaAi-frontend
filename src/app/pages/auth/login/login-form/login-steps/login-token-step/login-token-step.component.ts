import { Component } from '@angular/core';
import { InputOTPComponent } from '../../../../../../shared/components/inputs/input-otp/input-otp.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';

@Component({
    selector: 'app-login-token-step',
    imports: [InputOTPComponent, ButtonComponent],
    templateUrl: './login-token-step.component.html',
    styleUrl: '../login-form-steps.css',
})
export class LoginTokenStepComponent {}
