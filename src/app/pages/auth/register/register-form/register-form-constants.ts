import { inject } from "@angular/core";
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";

type createAccountFormControl = {
    email: FormControl<string>;
    name: FormControl<string>;
    tokenAccess: FormControl<string>;
}

export type createAccountFormGroup = ReturnType<typeof createAccountForm>

export type newAccount = ReturnType<createAccountFormGroup["getRawValue"]>

export function createAccountForm(): FormGroup<createAccountFormControl> {
    
    const fb = inject(NonNullableFormBuilder)
    
    return fb.group({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            nonNullable: true
        }),
        name: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true
        }),
        tokenAccess: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
            nonNullable: true
        }),
    })
}