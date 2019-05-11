import {Component, Input, OnInit, Output} from '@angular/core';
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

  ngOnInit() {
    /*  this.route.params.subscribe(params => {
        id = +params[id]; });
      console.log(this.getMovie(id));*/
  }

  addToCart() {
    const maybeMovies = JSON.parse(localStorage.getItem('movies'));
    const movies: [IMovie] = maybeMovies ? maybeMovies : [] ;
    movies.push(this.addedMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
  }
}


// addToCart() {
// this.add.emit(movieTitle.id);
// }
