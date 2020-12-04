import { Component, OnInit } from '@angular/core';
import { Candy } from './candy';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.scss']
})
export class CandyListComponent implements OnInit {

  candies: Candy[] = [
    {
      'name': 'Tableta de chocolate Milka',
      'price': 120,
      'stock': 20,
      quantity: 0,
      'image': './assets/images/Tableta de chocolate Milka.jpg'
    },
    {
      'name': 'Alfajor triple Aguila',
      'price': 80,
      'stock': 20,
      quantity: 0,
      'image': './assets/images/alfajor-aguila.jpg'
    },
    {
      'name': 'Cofler Block 300',
      'price': 350,
      'stock': 20,
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

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(candy: Candy) {
    if (candy.quantity < candy.stock) {
      candy.quantity++;
    }
  }

  downQuantity(candy: Candy) {
    if (candy.quantity > 0) {
      candy.quantity--;
    }
  }

  changeQuantity(event, candy: Candy): void {
    if (event.target.value < 0) {
      candy.quantity = 0;
    }
    else
      if (event.target.value > candy.stock) {
        candy.quantity = candy.stock;
      }
      else
        candy.quantity = event.target.value;
  }
}
