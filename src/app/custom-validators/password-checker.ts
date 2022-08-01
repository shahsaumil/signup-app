import {FormGroup} from '@angular/forms'

export function PasswordChecker(controlName: string, CompareControlName: string){
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confpassword = formGroup.controls[CompareControlName];

        if(password.value !== confpassword){
            confpassword.setErrors({mustmatch: true})

        }else{
            confpassword.setErrors(null);
        }
    }

}