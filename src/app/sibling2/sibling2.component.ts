import { Component } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css'],
})
export class Sibling2Component {
  public count: number = 0;
  public cartCountValue: number = 0;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getCount().subscribe((data) => {
      this.count = data;
    });
    this.commonService.getCartCount().subscribe((countValue) => {
      this.cartCountValue = countValue;
    });
  }
}
