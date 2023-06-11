import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private fromBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  checkoutForm = this.fromBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    console.warn('you item is', this.items);
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
