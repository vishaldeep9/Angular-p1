import { BankAccountsService } from './../bank-accounts.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css'],
})
export class CreateBankAccountComponent {
  public id: string = '';
  public accountForm: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
  });
  constructor(
    private bankAccountsService: BankAccountsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);
      this.id = data.id;
      this.bankAccountsService.getAccountsDetailById(this.id).subscribe((data)=>{
      this.accountForm.patchValue(data)
      })
    });
  }

  create() {
  if(this.id){
 this.bankAccountsService.updateBankAccount(this.accountForm.value,this.id).subscribe((result)=>{
  alert("updated Successfully");
  console.log(result)
  this.accountForm.reset();
 },
(error)=>{
  alert("Updation failed !")
})
  }
  else{
    this.bankAccountsService
      .createBankAccount(this.accountForm.value)
      .subscribe(
        (data) => {
          alert('Successfully bank account created');
          this.accountForm.reset();
        },
        (error: any) => {
          alert(error);
        }
      );
  }
  }
}
