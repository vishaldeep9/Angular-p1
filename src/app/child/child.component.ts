import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() public a:string=""

 public bc:string|undefined
 
 @Output() public vEvent:EventEmitter<string>=new EventEmitter();

 send(){
this.vEvent.emit(this.bc)
 }
}
