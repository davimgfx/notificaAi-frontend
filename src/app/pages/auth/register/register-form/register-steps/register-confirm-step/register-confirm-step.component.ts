import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { confirmAccountForm, hasErrorForm } from './confirm-form-constants';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidationMessagesComponent } from '../../../../../../shared/components/custom-validation-messages/custom-validation-messages.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { InputOTPComponent } from '../../../../../../shared/components/inputs/input-otp/input-otp.component';
import { HotToastService } from '@ngxpert/hot-toast';
import { HttpClient } from '@angular/common/http';
import { ResponseUser } from '../register-step/register-form-constants';

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
export class RegisterConfirmStepComponent implements OnInit {
    confirmAccountForm = confirmAccountForm();
    @Input() emailUser = '';

    constructor(
        private toast: HotToastService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        console.log(this.emailUser);
        this.http
            .post<ResponseUser>('http://localhost:8080/auth/login/token', {
                email: this.emailUser,
            })
            .subscribe({
                next: res => console.log(res),
                error: error => {
                    console.log(error);
                    if (error.error && error.error.errors) {
                        console.log(error.error.errors);
                        // Percorre os erros e exibe um toast para cada campo
                        Object.entries(error.error.errors).forEach(
                            ([_field, message]) => {
                                this.toast.error(message as string);
                            }
                        );
                    }
                },
            });
    }

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
