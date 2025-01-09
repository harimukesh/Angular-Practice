import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCount, selectSubTotal } from './store/selector';
import { select, Store } from '@ngrx/store';
import { ShoppingcartState } from './store/reducer';
import { CommonModule } from '@angular/common';
import { decrement, increment } from './store/action';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  value: number = 299;
  subTotal: number = 0;
  count: number = 0;
  productId: number = 0;
  products = [
    { id: 1, name: 'Product 1', price: 299 },
    { id: 2, name: 'Product 2', price: 399 },
    { id: 3, name: 'Product 3', price: 499 },
    { id: 4, name: 'Product 4', price: 599 },
    { id: 5, name: 'Product 5', price: 699 }
  ]

  constructor(private store: Store<ShoppingcartState>) {
  }

  getCount(productId: number): number {
    this.store.pipe(select(selectCount, { id: productId })).subscribe((value) => {
      this.count = value;
    });
    return this.count;
  }

  getSubTotal(productId: number): number {
    this.store.pipe(select(selectSubTotal, { id: productId })).subscribe((value) => {
      this.subTotal = value;
    });
    return this.subTotal;
  }

  incrementCount(product: any) {
    this.store.dispatch(increment({ id: product.id, value: product.price }));
  }

  decrementCount(product: any) {
    this.store.dispatch(decrement({ id: product.id, value: product.price }));
  }

}
