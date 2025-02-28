import { inject } from "@angular/core";
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";

type createAccountFormControl = {
    name: FormControl<string>;
    email: FormControl<string>;
}

export type createAccountFormGroup = ReturnType<typeof createAccountForm>

export type newAccount = ReturnType<createAccountFormGroup["getRawValue"]>

export function createAccountForm(): FormGroup<createAccountFormControl> {
    
    const fb = inject(NonNullableFormBuilder)
    
    return fb.group({
        name: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(30), Validators.minLength(3)],
            nonNullable: true
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email, Validators.maxLength(30), Validators.minLength(6)],
            nonNullable: true
        }),
    })
}

export function hasErrorForm(form: FormGroup, formControllerName: string): boolean {
    const control = form.get(formControllerName);
    return !!(control && control.invalid && (control.dirty || control.touched));

}