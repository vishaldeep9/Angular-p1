import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { UpiComponent } from './upi/upi.component';

const routes: Routes = [
  {component:CardComponent,path:'card'},
  {component:UpiComponent,path:'upi'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
