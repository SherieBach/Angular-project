import {Injectable} from '@angular/core';
import {IMovie} from '../interfaces/IMovie';
import {IOrderItem} from '../interfaces/IOrderItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  addToCart(movie: IMovie) {
    const movies: IMovie[] = this.getCartItems() ? this.getCartItems() : [];
    console.log(movies);
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    console.log('Here' + movie);
  }


  perMovie(movies: IMovie[]): object {
    const box = {};
    movies.forEach((movie) => {
      if (box[movie.id]) {
        box[movie.id] = box[movie.id] + 1;
      } else {
        box[movie.id] = 1;
      }
    });
    return box;
  }

  toOrderItems(movies: IMovie[]): IOrderItem[] {
    const amountId = this.perMovie(movies);
    const movieIds: string[] = Object.keys(amountId);
    return movieIds.map((id => ({ProductId: parseInt(id, 10), Amount: amountId[id]})));
  }

  getCartItems(): IMovie[] {
    const cartItems: IMovie[] = JSON.parse(localStorage.getItem('movies'));
    return cartItems ? cartItems : [];
  }

  deleteFromCart(id: number) {
    console.log(id);
    const remainedItems = this.getCartItems().filter(movie => movie.id !== id);
    localStorage.setItem('movies', JSON.stringify(remainedItems));
  }

  clearCart() {
    localStorage.clear();
  }
}
