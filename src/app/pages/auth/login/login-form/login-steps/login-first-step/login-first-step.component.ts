import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from "../../../../../../shared/components/inputs/input/input.component";
import { ButtonComponent } from "../../../../../../shared/components/button/button.component";


@Component({
    selector: 'app-login-first-step',
    imports: [InputComponent, ButtonComponent],
    templateUrl: './login-first-step.component.html',
    styleUrl: './login-first-step.component.css'
})
export class LoginFirstStepComponent {
    @Output() nextStep = new EventEmitter<void>();

    submitLoginFirstStep(){
        this.nextStep.emit()
    }

}
