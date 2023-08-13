import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformcomp',
  templateUrl: './reactiveformcomp.component.html',
  styleUrls: ['./reactiveformcomp.component.css']
})
export class ReactiveformcompComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup;
  forbiddenusername = ['Chris', 'Anna']; //no user can use this username.custom validation.

  constructor() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });

    //It is used for all the fields.   
    this.signupForm.setValue({
      'username': 'Swapon Das',
        'email': 'swapon@mail.com',
        'gender': 'Male',
        'hobbies': []
    });

    //It is used for a specific field
    this.signupForm.patchValue({
      'username': 'Aborto Aditya Roy'
    });

   }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  get username(){
    return this.signupForm.get('username');
  }

  get email(){
    return this.signupForm.get('email');
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbiesControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  
  //created this custom validation for username but working properly.
  forbiddenNames(control: FormControl): {[s: string]: boolean} | null{
    if(this.forbiddenusername.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  

}
