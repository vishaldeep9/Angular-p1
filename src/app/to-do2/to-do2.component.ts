import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do2',
  templateUrl: './to-do2.component.html',
  styleUrls: ['./to-do2.component.css'],
})
export class ToDo2Component {
 
  public todoData:{textData:string,dateData:string}[]=[]

  constructor(private todoService: ToDoService) {}
  ngOnInit() {
    this.todoService.getTask().subscribe((data) => {
      this.todoData=data;
    })}
 
  view(index:number){
    const textValue=this.todoData[index].textData
    this.todoService.setSelectedTask(textValue);
    this.todoService.setIsVisible(true);
  }
  delete(index:number){
    
    this.todoData.splice(index, 1);
  }
  edit(index:number){
    const dataValue=this.todoData[index]
    this.todoService.setEditTask(dataValue);
  }
}
