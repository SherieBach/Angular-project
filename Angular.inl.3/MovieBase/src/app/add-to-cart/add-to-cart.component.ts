import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  constructor(/*private route: ActivatedRoute,*/
              private movieService: MovieService) {
  }
  @Input() movieId: number;
  @Output() add: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    /*  this.route.params.subscribe(params => {
        id = +params[id]; });
      console.log(this.addMovieToCart(id));*/
  }

  addMovie() {  // when clicked it adds and emits to movieId and button will pass the value=>movieId in to movie.id from IMovie
   this.add.emit(this.movieId);
   console.log('emitted ' + this.movieId);
  }
}



// addToCart() {
// this.add.emit(movieTitle.id);
// }
