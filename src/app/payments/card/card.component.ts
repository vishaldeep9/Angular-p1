import { Component } from '@angular/core';
// console.log("this is Card")
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(){
    console.log("this is Card")
  }
}
