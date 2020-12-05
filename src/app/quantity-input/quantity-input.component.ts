import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss']
})
export class QuantityInputComponent implements OnInit {

  @Input()
  quantity: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  max: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event): void {
    if (event.target.value < 0) {
      this.quantity = 0;
    }
    else
      if (event.target.value > this.max) {
        this.quantity = this.max;
      }
      else
      this.quantity = event.target.value;
    this.quantityChange.emit(this.quantity);
  }
}
