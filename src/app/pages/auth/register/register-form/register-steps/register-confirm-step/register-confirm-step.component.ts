import { Component, ViewChild } from '@angular/core';
import { confirmAccountForm, hasErrorForm } from './confirm-form-constants';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidationMessagesComponent } from '../../../../../../shared/components/custom-validation-messages/custom-validation-messages.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { InputOTPComponent } from '../../../../../../shared/components/inputs/input-otp/input-otp.component';

@Component({
    selector: 'app-register-confirm-step',
    imports: [
        ReactiveFormsModule,
        CustomValidationMessagesComponent,
        ButtonComponent,
        InputOTPComponent,
    ],
    templateUrl: './register-confirm-step.component.html',
    styleUrl: '../register-form-steps.css',
})
export class RegisterConfirmStepComponent {
    confirmAccountForm = confirmAccountForm();

    @ViewChild(InputOTPComponent) inputOTP!: InputOTPComponent;

    submitConfirmUserForm() {
        this.confirmAccountForm.setValue({
            accessToken: this.inputOTP.getValueInputOTP(),
        });

        console.log(this.confirmAccountForm.getRawValue());

        Object.values(this.confirmAccountForm.controls).forEach(control => {
            if (control.invalid) {
                control.markAsDirty();
                control.updateValueAndValidity({ onlySelf: true });
            }
        });
    }

    hasErrorFormFunc(controlName: string) {
        return hasErrorForm(this.confirmAccountForm, controlName);
    }
}
