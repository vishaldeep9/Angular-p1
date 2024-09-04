import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component {
  
  constructor(private cartService:CartItemService){}
  add(){
    this.cartService.addToCart();
  }

}
