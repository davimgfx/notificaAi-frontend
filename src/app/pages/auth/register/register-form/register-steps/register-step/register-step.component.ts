import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {
    createAccountForm,
    hasErrorForm,
    ResponseUser,
} from './register-form-constants';
import { InputComponent } from '../../../../../../shared/components/inputs/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidationMessagesComponent } from '../../../../../../shared/components/custom-validation-messages/custom-validation-messages.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { HotToastService } from '@ngxpert/hot-toast';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-register-step',
    imports: [
        InputComponent,
        ReactiveFormsModule,
        CustomValidationMessagesComponent,
        ButtonComponent,
    ],
    templateUrl: './register-step.component.html',
    styleUrl: '../register-form-steps.css',
})
export class RegisterStepComponent {
    createUserForm = createAccountForm();

    @Output() stepChange = new EventEmitter<void>();
    @Output() emailChange = new EventEmitter<string>();

    constructor(
        private toast: HotToastService,
        private http: HttpClient
    ) {}

    submitCreateUserForm() {
        this.emailChange.emit(this.createUserForm.value.email);
        if (this.createUserForm.valid) {
            this.http
                .post<ResponseUser>('http://localhost:8080/auth/register', {
                    name: this.createUserForm.value.name,
                    email: this.createUserForm.value.email,
                })
                .pipe(
                    this.toast.observe({
                        loading: 'Salvando...',
                        success: (response: ResponseUser) => response.message,
                        error: (error: unknown): string => {
                            if (error instanceof HttpErrorResponse) {
                                if (
                                    error.status === 0 ||
                                    error.status === 500
                                ) {
                                    return 'Erro desconhecido, tente novamente mais tarde!';
                                }
                                return (
                                    error.error.message || 'Erro desconhecido'
                                );
                            }
                            return 'Erro desconhecido, tente novamente mais tarde!';
                        },
                    })
                )
                .subscribe({
                    next: () => this.stepChange.emit(),
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

        Object.values(this.createUserForm.controls).forEach(control => {
            if (control.invalid) {
                control.markAsDirty();
                control.updateValueAndValidity({ onlySelf: true });
            }
        });
    }

    hasErrorFormFunc(controlName: string) {
        return hasErrorForm(this.createUserForm, controlName);
    }
}
