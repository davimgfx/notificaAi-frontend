import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonWidth = 'full' | 'auto' | "fit";

type ButtonVariant = 'container' | 'outline' | 'text' | 'normal';

type ButtonType = 'button' | 'submit' | 'reset';


@Component({
    selector: 'app-button',
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() variant: ButtonVariant = 'container';
  @Input() width: ButtonWidth = 'auto';
  @Input() type: ButtonType = 'button';
//   @Input() disabled: disabledButton = false;

//   disabledStyle: disabledButtonStyle = null;

//   ngOnInit() {
//     if(this.disabled) {
//         this.disabledStyle = 'disabled';
//     }
//   }
 
}
