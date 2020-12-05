import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CandyCartService } from '../candy-cart.service';
import { Candy } from '../candy-list/candy';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  shopList$: Observable<Candy[]>;

  constructor(private cartService: CandyCartService) {
    this.shopList$ = cartService.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  getTotal() {
    return this.cartService.total; 
  }
}
