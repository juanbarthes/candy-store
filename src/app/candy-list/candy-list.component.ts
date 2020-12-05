import { Component, OnInit } from '@angular/core';
import { CandyCartService } from '../candy-cart.service';
import { Candy } from './candy';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.scss']
})
export class CandyListComponent implements OnInit {

  candies: Candy[] = [
    {
      'name': 'Chocolatin Kinder',
      'price': 40,
      'stock': 25,
      quantity: 0,
      'image': './assets/images/barrita-kinder.png'
    },
    {
      'name': 'Gomitas Mogul 50gr',
      'price': 50,
      'stock': 15,
      quantity: 0,
      'image': './assets/images/gomitas.jpg'
    },
    {
      'name': 'Alfajor Simple Mogui',
      'price': 10,
      'stock': 23,
      quantity: 0,
      'image': './assets/images/alfajor-mogui.jpg'
    },
    {
      'name': 'Tableta de chocolate Milka',
      'price': 120,
      'stock': 10,
      quantity: 0,
      'image': './assets/images/Tableta de chocolate Milka.jpg'
    },
    {
      'name': 'Alfajor triple Aguila',
      'price': 80,
      'stock': 30,
      quantity: 0,
      'image': './assets/images/alfajor-aguila.jpg'
    },
    {
      'name': 'Cofler Block 300',
      'price': 350,
      'stock': 12,
      quantity: 0,
      'image': './assets/images/cofler-300.jpg'
    },
    {
      'name': 'Galletitas bañadas en chocolate Oreo',
      'price': 300,
      'stock': 0,
      quantity: 0,
      'image': './assets/images/oreos-baniadas.jpg'
    },
  ]

  constructor(private cartService: CandyCartService) {
    
   }

  ngOnInit(): void {
  }

  addToCart(candy: Candy){
    if (candy.quantity > 0) {
      this.cartService.addToCart(candy);
      candy.stock -= candy.quantity;
      candy.quantity = 0;
    }
  }
}
