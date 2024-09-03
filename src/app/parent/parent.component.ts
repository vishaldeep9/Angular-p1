import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

public text:string=""
public maxValue:number=0;


public bp:string|undefined;
catch(value:string){
  this.bp=value
}
}
