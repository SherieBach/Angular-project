import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {MovieService} from '../services/movie.service';
import {IMovie} from '../interfaces/IMovie';
import {IOrderItem} from '../interfaces/IOrderItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,
              private movieService: MovieService) {
  }

  ngOnInit() {
  }

  totalPrice(): number {
    return this.cartService.getCartItems().reduce((cost, movie) => cost + movie.price, 0);
  }

  newId(movies: IMovie[]): IOrderItem[] {
    return movies.map((movie => ({ProductId: movie.id, Amount: 1})));
  }

  sendOrder() {
    const cartItems: IMovie[] = this.cartService.getCartItems();
    const orderItems: IOrderItem[] = this.newId(cartItems);
    console.log(orderItems + 'cart');
    this.movieService.postOrder(orderItems, this.totalPrice(), 'PayPal', 19)
      .subscribe(() => {
        this.cartService.clearCart();
      }, (error) => {
        alert('Something went wrong please try again in a moment' + error.toString());
      });
      }
}
