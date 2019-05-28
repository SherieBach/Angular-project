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

  totalAmount(): number {
    return this.cartService.getCartItems().reduce((cost, movie) => cost + movie.price, 0);
  }

  findAndMatchId(movies: IMovie[]): IOrderItem[] {
      throw Error('shit');
  }

  sendOrder() {
    const cartItems: IMovie[] = this.cartService.getCartItems();
    const orderItems: IOrderItem[] = this.findAndMatchId(cartItems);
    this.movieService.postOrder(orderItems);
  }
}
