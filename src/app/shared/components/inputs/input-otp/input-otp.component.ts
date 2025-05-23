import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    Input,
    QueryList,
    ViewChildren,
    forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input-otp',
    imports: [CommonModule],
    templateUrl: './input-otp.component.html',
    styleUrl: './input-otp.component.css',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputOTPComponent),
            multi: true,
        },
    ],
})
export class InputOTPComponent implements ControlValueAccessor {
    @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

    @Input() hasError: Record<string, boolean> = {};

    private _value = ''; // Agora é uma string completa
    onChange: (value: string) => void = () => {
        return;
    };
    onTouched: () => void = () => {
        return;
    };

    // Implementação de ControlValueAccessor
    writeValue(value: string): void {
        this._value = value || '';
        this.updateInputs();
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    onInputChange(event: Event, index: number): void {
        const input = event.target as HTMLInputElement;
        const value = input.value;

        if (!/^[0-9]?$/.test(value)) {
            input.value = '';
            return;
        }

        const valueArray = this._value.split('');
        valueArray[index] = value || '';
        this._value = valueArray.join('');

        this.onChange(this._value);

        if (value && index < this.otpInputs.length - 1) {
            this.otpInputs.toArray()[index + 1].nativeElement.focus();
        }

        console.log(this._value);
    }

    onKeyDown(event: KeyboardEvent, index: number): void {
        const input = this.otpInputs.toArray()[index]
            .nativeElement as HTMLInputElement;
        const allowedKeys = [
            'Backspace',
            'ArrowLeft',
            'ArrowRight',
            'Delete',
            'Tab',
        ];

        if (!allowedKeys.includes(event.key) && !/^[0-9]$/.test(event.key)) {
            event.preventDefault();
            return;
        }

        if (event.key === 'Backspace' && !input.value) {
            // Remove o valor na posição correspondente
            const valueArray = this._value.split('');
            valueArray[index] = '';
            this._value = valueArray.join('');

            this.onChange(this._value); // Atualiza a string completa

            // Move para o campo anterior, se existir
            if (index > 0) {
                const prevInput =
                    this.otpInputs.toArray()[index - 1].nativeElement;
                prevInput.focus();
            }
        }
    }

    private updateInputs(): void {
        const valueArray = this._value.split('');
        if (this.otpInputs) {
            this.otpInputs.forEach((input, index) => {
                input.nativeElement.value = valueArray[index] || '';
            });
        }
    }

    getValueInputOTP(): string {
        return this._value;
    }

    onPaste(event: ClipboardEvent): void {
        event.preventDefault();

        console.log(event);

        const pasteData = event.clipboardData?.getData('text') || '';
        const digits = pasteData.replace(/\D/g, '').slice(0, 6); // Remove caracteres não numéricos e limita a 6 dígitos

        if (!digits) return;

        this._value = digits;
        this.onChange(this._value); // Atualiza o `ControlValueAccessor`

        // Preenche os inputs com os valores colados
        this.otpInputs.forEach((input, index) => {
            input.nativeElement.value = digits[index] || '';
        });

        // Move o foco para o último campo preenchido
        const lastIndex = digits.length - 1;
        if (lastIndex >= 0 && lastIndex < this.otpInputs.length) {
            this.otpInputs.toArray()[lastIndex].nativeElement.focus();
        }
    }
}
