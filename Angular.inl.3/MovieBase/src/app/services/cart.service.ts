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


  perMovie(movies: IMovie[]): object { // Return a object
    const box = {};                     // Set an empty object
    movies.forEach((movie) => { // for every movie from IMovie
      if (box[movie.id]) {                // if the empty object contains a movie.id
        box[movie.id] = box[movie.id] + 1; // set a new movie.id inside the box
      } else {
        box[movie.id] = 1; // if not, box will only contain one set of the id.
      }
    });
    return box;  // return the complete object with all the specified ids and amount
  }

  toOrderItems(movies: IMovie[]): IOrderItem[] {
    const amountId = this.perMovie(movies);  // function perMovie, take all the movies from perMovie
    const movieIds: string[] = Object.keys(amountId); // get the keys (ids) from the perMovie
    return movieIds.map((id => ({ProductId: parseInt(id, 10), Amount: amountId[id]})));
    // map the id to the ProductId and set Amount to all the containing movies from perMovie function.
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
