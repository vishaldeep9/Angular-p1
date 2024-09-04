import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do1',
  templateUrl: './to-do1.component.html',
  styleUrls: ['./to-do1.component.css']
})
export class ToDo1Component {
 public text:string="";
 public date:string="";
 
 constructor(private todoService:ToDoService){}
 ngOnInit(){
  this.todoService.getEditTask().subscribe((data)=>{
   if(data){
    this.text=data?.textData;
    this.date=data?.dateData;
   }
  })
 }
 
 setData(){
  this.todoService.setTask({textData:this.text,dateData:this.date});
//  this.reset();
 }
 reset(){
  this.text="";
  this.date="";
 }
}
