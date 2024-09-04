import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private tasks: { textData: string; dateData: string }[] = [];
  public isVisible: boolean = false;
  constructor() {}

  //for adding new object
  private taskSubject: BehaviorSubject<
    { textData: string; dateData: string }[]
  > = new BehaviorSubject(this.tasks);

  setTask(task: { textData: string; dateData: string }) {
    this.tasks.push(task);
    this.taskSubject.next(this.tasks);
  }
  getTask() {
    return this.taskSubject;
  }

  //for edit button
  private editSubject: BehaviorSubject<{ textData: string; dateData: string } | null> = new  BehaviorSubject<{ textData: string; dateData: string } | null>(null);

  setEditTask(task: { textData: string; dateData: string }) {
    this.editSubject.next(task);
  }
  getEditTask() {
    return this.editSubject;
  }

  //for view button
  private selectedTaskSubject: BehaviorSubject<string> = new BehaviorSubject(
    ''
  );

  setSelectedTask(text: string) {
    this.selectedTaskSubject.next(text);
  }
  getSelectedTask() {
    return this.selectedTaskSubject;
  }

  // for boolean isVisible
  private isVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isVisible
  );

  setIsVisible(value: boolean) {
    this.isVisibleSubject.next(value);
  }
  getIsVisible() {
    return this.isVisibleSubject;
  }
}
