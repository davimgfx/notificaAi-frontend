import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputType = 'button' | 'text' | 'password' | 'email' | 'number';

@Component({
    selector: 'app-input',
    imports: [],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css',
})
export class InputComponent implements ControlValueAccessor {
    @Input() type: InputType = 'text';

    @Input() placeholder = '';

    @Input() hasError: Record<string, boolean> = {};

    value = '';
    onChange: (value: string) => void = () => {
        return;
    };
    onTouched: () => void = () => {
        return;
    };

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
        this.onChange(this.value);
    }
}
