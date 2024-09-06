import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  public user:User={
    name:'aaa',
    age:20,
    email:"09csisj@gmail.com"
  }
}
