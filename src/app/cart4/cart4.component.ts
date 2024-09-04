import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';
@Component({
  selector: 'app-cart4',
  templateUrl: './cart4.component.html',
  styleUrls: ['./cart4.component.css']
})
export class Cart4Component {
  public cartCount:number=0;

  constructor(private cartService:CartItemService){}
  ngOnInit(){
  this.cartService.getCartCount().subscribe((countValue)=>{
     this.cartCount=countValue
  })
  }
}
