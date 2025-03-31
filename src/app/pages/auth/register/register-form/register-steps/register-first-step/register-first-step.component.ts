import { Component, Output, EventEmitter } from '@angular/core';
import { createAccountForm, hasErrorForm, ResponseUser } from './register-form-constants';
import { InputComponent } from "../../../../../../shared/components/inputs/input/input.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidationMessagesComponent } from "../../../../../../shared/components/custom-validation-messages/custom-validation-messages.component";
import { ButtonComponent } from "../../../../../../shared/components/button/button.component";
import { HotToastService } from '@ngxpert/hot-toast';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-register-first-step',
    imports: [InputComponent, ReactiveFormsModule, CustomValidationMessagesComponent, ButtonComponent],
    templateUrl: './register-first-step.component.html',
    styleUrl: '../register-form-steps.css'
})
export class RegisterFirstStepComponent {
    createUserForm = createAccountForm()

    @Output() stepChange = new EventEmitter<void>();

    
    constructor(private toast: HotToastService, private http: HttpClient) {}
    
    submitCreateUserForm(){
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
                    error: () => 'Erro ao criar usuário',
                })
            )
            .subscribe({
                next: () => this.stepChange.emit(),
                error: (error) => {
                    if (error.error && error.error.errors) {

                            console.log(error.error.errors);
                            // Percorre os erros e exibe um toast para cada campo
                            Object.entries(error.error.errors).forEach(([field, message]) => {
                                this.toast.error(message as string);
                            });
                        }
                }
            });
            
        }

        
        Object.values(this.createUserForm.controls).forEach((control) => {
            if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
            }
        });
        
    }

     hasErrorFormFunc(controlName : string) {
        return hasErrorForm(this.createUserForm, controlName);
     }
}
