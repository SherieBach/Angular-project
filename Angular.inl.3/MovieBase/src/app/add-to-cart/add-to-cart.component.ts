import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {IMovie} from '../interfaces/IMovie';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  constructor(/*private route: ActivatedRoute,*/
              private movieService: MovieService) {
  }

  @Input() addedMovie: IMovie;
  items = '';
  ngOnInit() {
  }

  addToCart() {
    const movies: IMovie[] = this.getCartItems() ? this.getCartItems() : [];
    movies.push(this.addedMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
    this.items = JSON.stringify(this.addedMovie);
    console.log('Here' + this.items);
  }
  getCartItems(): IMovie[] {
    const cartItems: IMovie[] = JSON.parse(localStorage.getItem('movies'));
    return cartItems ? cartItems : [];
  }

  deleteFromCart(index) {
   const remainedItems = this.getCartItems().splice(index, 1);
   localStorage.setItem('movies', JSON.stringify(remainedItems));
 }

  /*  removeAllItems() {
        localStorage.clear();
    }*/
}
