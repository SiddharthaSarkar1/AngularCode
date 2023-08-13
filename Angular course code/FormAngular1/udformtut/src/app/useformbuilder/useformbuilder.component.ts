import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-useformbuilder',
  templateUrl: './useformbuilder.component.html',
  styleUrls: ['./useformbuilder.component.css']
})
export class UseformbuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  userprofileForm = this.fb.group({
    firstName : ['', Validators.required],
    lastName : [''],
    address : this.fb.group({
      address1 : [''],
      address2 : [''],
      state : [''],
      zip : ['']
    })
  });

  ngOnInit(): void {
  }

  onSubmit(){
    // console.warn(this.userprofileForm.value);
    console.warn(this.userprofileForm.controls['firstName'].value);
    console.warn(this.userprofileForm.controls['lastName'].value);
    //Accessing nested group
    console.log(this.userprofileForm.get(['address', 'address1'])?.value);
    console.log(this.userprofileForm.get('address')?.get('address2')?.value);

  }

}
