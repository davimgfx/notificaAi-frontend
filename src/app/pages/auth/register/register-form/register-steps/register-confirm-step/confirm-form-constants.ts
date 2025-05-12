import { inject } from "@angular/core";
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";

interface confirmAccountFormControl {
    accessToken: FormControl<string>;
}

export type confirmAccountFormGroup = ReturnType<typeof confirmAccountForm>

export type confirmAccount = ReturnType<confirmAccountFormGroup["getRawValue"]>

export function confirmAccountForm(): FormGroup<confirmAccountFormControl> {
    
    const fb = inject(NonNullableFormBuilder)
    
    return fb.group({
        accessToken: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(6), Validators.minLength(6)],
            nonNullable: true
        }),
    })
}

export function hasErrorForm(form: FormGroup, formControllerName: string): boolean {
    const control = form.get(formControllerName);
    
    return !!(control && control.invalid && control.dirty);

}