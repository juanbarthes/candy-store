import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Candy } from './candy-list/candy';

@Injectable({
  providedIn: 'root'
})
export class CandyCartService {
  
  private _cartList: Candy[] = [];
  cartList: BehaviorSubject<Candy[]> = new BehaviorSubject([]);//Encapsula la informacion que se desea observar
  total: number = 0;
  
  constructor() { }

  addToCart(candy: Candy) {
    let item = this._cartList.find(v1 => v1.name == candy.name)
    if (!item) {
      this._cartList.push({... candy});//Clona el objeto y lo agrega al arreglo
    }
    else{
      console.log(item.quantity);
      console.log(item.price);
      item.quantity += Number(candy.quantity);
    }
      this.total += candy.price * candy.quantity;
      
    this.cartList.next(this._cartList);//Tiene el mismo efecto que usar el emitt de los eventos
  }
}
