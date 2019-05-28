import {Injectable} from '@angular/core';
import {IMovie} from '../interfaces/IMovie';

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

  getCartItems(): IMovie[] {
    const cartItems: IMovie[] = JSON.parse(localStorage.getItem('movies'));
    return cartItems ? cartItems : [];
  }

  deleteFromCart(id: number) {
    console.log(id);
    const remainedItems = this.getCartItems().filter(movie => movie.id !== id);
    localStorage.setItem('movies', JSON.stringify(remainedItems));
  }

  addOrder() {
    const orderItems: IMovie[] = JSON.parse(localStorage.getItem('movies'));
  }

}
