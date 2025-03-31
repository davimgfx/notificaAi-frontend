import { Component, inject, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-custom-validation-messages',
    imports: [],
    templateUrl: './custom-validation-messages.component.html',
    styleUrl: './custom-validation-messages.component.css'
})
export class CustomValidationMessagesComponent {
  @Input({ required: true })
  public controlName!: string;

  @Input({ required: false })
  public minLength!: number;

  @Input({ required: false })
  public maxLength!: number;

  @Input({ required: false })
  public min!: number;

  @Input({ required: false })
  public max!: number;

  private _controlContainer = inject(ControlContainer);

  get form(): FormGroup {
    return this._controlContainer.control as FormGroup;
  }

  get control(): FormControl {
    return this.form.get(this.controlName) as FormControl;
  }
}
