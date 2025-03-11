import { Component, Output, EventEmitter } from '@angular/core';
import { createAccountForm, hasErrorForm } from './register-form-constants';
import { InputComponent } from "../../../../../../shared/components/inputs/input/input.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidationMessagesComponent } from "../../../../../../shared/components/custom-validation-messages/custom-validation-messages.component";
import { ButtonComponent } from "../../../../../../shared/components/button/button.component";

@Component({
  selector: 'app-register-first-step',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, CustomValidationMessagesComponent, ButtonComponent],
  templateUrl: './register-first-step.component.html',
  styleUrl: '../register-form-steps.css'
})
export class RegisterFirstStepComponent {
    createUserForm = createAccountForm()

    @Output() stepChange = new EventEmitter<void>();

    submitCreateUserForm(){
        if (this.createUserForm.valid) {
             this.stepChange.emit()
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
