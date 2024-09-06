import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern( /^[a-zA-Z\s]*$/)]),
    age: new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    //Nested FormGroup--------------(2)
    address: new FormGroup({
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl(),
    }),
    type: new FormControl(),
    // busFee:new FormControl(),
    // hostelFee:new FormControl()
    //FormArray-----------------------(4)
    cards:new FormArray([])
  });

  //now only we can use push method if we return as FormArray
  //it is TypeScript getter method 
  //When you define a method/function with get, it allows you to access it like a property rather than a function.
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(new FormGroup({
      number:new FormControl('',[Validators.required]),
      expiry:new FormControl(),
      cvv:new FormControl()
    }))
  }
delete(i:number){
  this.cardsFormArray.removeAt(i)
}

//Dynamic Forms	----------------(3)
  constructor() {
    console.log('this is create user-component')
    this.userForm.get('type')?.valueChanges.subscribe((data) => {
      if (data === 'dayScholor') {
        this.userForm.addControl('busFee', new FormControl());
        this.userForm.removeControl('hostelFee');
      } else if (data === 'residential') {
        this.userForm.addControl('hostelFee', new FormControl());
        this.userForm.removeControl('busFee');
      }
    });
  }

  submit() {
    console.log(this.userForm);
  }
}
