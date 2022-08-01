import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PasswordChecker} from './custom-validators/password-checker'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-app';
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder){

  }

  ngOnInit(){
this.registerForm = this.formbuilder.group({
  firstname: ['', [Validators.required, Validators.minLength(2)]],
  lastname:['', Validators.required],
  email: ['',[Validators.email, Validators.required, Validators.pattern('//')]], 
  password: ['',[Validators.minLength(4), Validators.required]],
  confirmpassword:['',Validators.required],
  acceptTandC: [false, Validators.requiredTrue],
},{
  validators: PasswordChecker('password','confirmpassword')
});
  }


  get hello(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert('Success Signup\n' + JSON.stringify(this.registerForm.value) )
  }
  onReset(){
    this.submitted=false;
    this.registerForm.reset();
}
}