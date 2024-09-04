import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css'],
})
export class Cart2Component {
  public cartCount: number = 0;

  constructor(private cartService: CartItemService) {}
  ngOnInit() {
    this.cartService.getCartCount().subscribe((countValue) => {
      this.cartCount = countValue;
    });
  }
}
