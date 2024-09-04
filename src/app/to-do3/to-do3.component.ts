import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do3',
  templateUrl: './to-do3.component.html',
  styleUrls: ['./to-do3.component.css']
})
export class ToDo3Component {
   public text:string="";
   public isVisible:boolean=false

   constructor(private todoService:ToDoService){}
   ngOnInit(){
    // this.todoService.getTask().subscribe((data)=>{
    //   if (data.length > 0) {
    //     this.text = data[data.length - 1].textData; // Get the textData of the last task added
    //   }});
    this.todoService.getSelectedTask().subscribe((data)=>{
      this.text=data;
    })
    this.todoService.getIsVisible().subscribe((result)=>{
      this.isVisible=result;
    })
   }

}
