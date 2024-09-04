import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';
@Component({
  selector: 'app-cart3',
  templateUrl: './cart3.component.html',
  styleUrls: ['./cart3.component.css']
})
export class Cart3Component {
  public cartCount:number=0;

  constructor(private cartService:CartItemService){}
  ngOnInit(){
  this.cartService.getCartCount().subscribe((countValue)=>{
     this.cartCount=countValue;
  })
  }
}
