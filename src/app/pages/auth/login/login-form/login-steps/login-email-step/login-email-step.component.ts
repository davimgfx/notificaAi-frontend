import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '../../../../../../shared/components/inputs/input/input.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';

@Component({
    selector: 'app-login-email-step',
    imports: [InputComponent, ButtonComponent],
    templateUrl: './login-email-step.component.html',
    styleUrl: '../login-form-steps.css',
})
export class LoginEmailStepComponent {
    @Output() nextStep = new EventEmitter<void>();

    submitLoginFirstStep() {
        this.nextStep.emit();
    }
}
