import { CreateStudentFormComponent } from './create-student-form/create-student-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { AmazonCartComponent } from './amazon-cart/amazon-cart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { FlipkartCartComponent } from './flipkart-cart/flipkart-cart.component';
import { EmailComponent } from './email/email.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MemesComponent } from './memes/memes.component';
import { AuthenticationGuard } from './authentication.guard';
import { ReloadComponent } from './reload/reload.component';
import { ViewVehiclesComponent } from './view-vehicles/view-vehicles.component';
import { ViewBanksComponent } from './view-banks/view-banks.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { CartComponent } from './cart/cart.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],  component:DashboardComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:"",component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'dice',component:DiceComponent},
    {path:'directives-pipes',component:DirectivesPipesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'amazon-cart',component:AmazonCartComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'bank-accounts',component:BankAccountsComponent},
    {path:'flipkart-cart',component:FlipkartCartComponent},
    {path:'emails',component:EmailComponent},
    {path:'create-vehicles',component:CreateVehiclesComponent},
    {path:'create-bank-account',component:CreateBankAccountComponent},
    {path:'students',component:StudentComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'memes',component:MemesComponent},
    {path:'reload',component:ReloadComponent},
    //doing this to add this in the end of url
    {path:'view-vehicle/:id',component:ViewVehiclesComponent},
    {path:'view-bank/:id',component:ViewBanksComponent},
    {path:'edit-vehicle/:id',component:CreateVehiclesComponent},
    {path:'edit-bank-account/:id',component:CreateBankAccountComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'create-student-form',component:CreateStudentFormComponent},
    {path:'parent',component:ParentComponent},
    // {path:'child',component:ChildComponent},
    {path:'sibling',component:SiblingComponent},
    {path:'cart',component:CartComponent},
    {path:'to-do',component:ToDoComponent},
    {path:'about-company',component:AboutCompanyComponent}

  ]},
 
  //wild card path
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
