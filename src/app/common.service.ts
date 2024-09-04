import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
//create subject
private countSubject:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor() { }

  //set value
  setCount(value:number){
    // here,we are storing next value 
    this.countSubject.next(value);
  }
  //get value
  getCount(){
    return this.countSubject;
  }
  // ====================================for cart
  private cartCount:number=0;
  private cartCountSubject:BehaviorSubject<number>=new BehaviorSubject(this.cartCount);

  addToCart(){
    this.cartCount++;
    this.cartCountSubject.next(this.cartCount);
  }
  getCartCount(){
    return this.cartCountSubject;
  }
}
