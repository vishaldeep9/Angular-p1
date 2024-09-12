import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student-form',
  templateUrl: './create-student-form.component.html',
  styleUrls: ['./create-student-form.component.css'],
})
export class CreateStudentFormComponent {
  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fatherName: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    type: new FormControl(),
    // busFee:new FormControl(),
    // hostelFee:new FormControl()
    marks: new FormArray([]), //blank array
  });
  constructor() {
    //after selecting radio button ,show busFee & schoolFee input field respectively, before selecting any radio don't show any of these input field
    this.studentForm.get('type')?.valueChanges.subscribe((val) => {
      if (val == 'dayScholor') {
        this.studentForm.addControl('busFee', new FormControl());
        this.studentForm.removeControl('hostelFee');
      } else if (val == 'residential') {
        this.studentForm.addControl('hostelFee', new FormControl());
        this.studentForm.removeControl('busFee');
      }
    });
  }

  get marksFormArray() {
    return this.studentForm.get('marks') as FormArray;
  }
  addMarks() {
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl("",[Validators.min(0),Validators.max(100)]),
      })
    );
  }
  delete(i: number) {
    this.marksFormArray.removeAt(i);
  }
  submit() {
    console.log(this.studentForm);
  }
}
