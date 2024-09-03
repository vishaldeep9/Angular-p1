import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent {
  public text: string = '';
  public count: number = 0;


  @Input() public max: number = 0;

  countChar() {
    if (this.count <=this.max) {
      this.count =this.text.length;
     
    }
  }
}
