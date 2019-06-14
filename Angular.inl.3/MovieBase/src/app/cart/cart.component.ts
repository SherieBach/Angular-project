import {Component} from '@angular/core';
import {CartService} from '../services/cart.service';
import {MovieService} from '../services/movie.service';
import {IMovie} from '../interfaces/IMovie';
import {IOrderItem} from '../interfaces/IOrderItem';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService,
              private movieService: MovieService,
              private fB: FormBuilder) {
  }


  profileForm = this.fB.group({
    email: ['', [Validators.required, Validators.email]],
  });

  totalAmount(): number {
    return this.cartService.getCartItems().length;
  }

  totalPrice(): number {
    return this.cartService.getCartItems().reduce((cost, movie) => cost + movie.price, 0);
  }

  sendOrder() {
    const userEmail = this.profileForm.get('email').value;
    console.log('KUK ' + userEmail);
    const cartItems: IMovie[] = this.cartService.getCartItems();
    const orderItems: IOrderItem[] = this.cartService.toOrderItems(cartItems);
    console.log(orderItems + 'cart');
    this.movieService.postOrder(orderItems, this.totalPrice(), 'PayPal', 19, userEmail, '0001-01-01T00:00:00', 0)
      .subscribe(() => {

        this.cartService.clearCart();
      }, (error) => {
        alert('Something went wrong please try again in a moment' + error.toString());
      });
  }
}
