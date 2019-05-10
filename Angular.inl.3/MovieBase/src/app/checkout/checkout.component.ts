import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMovie} from '../interfaces/IMovie';
import {MovieService} from '../services/movie.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private movieService: MovieService) {
  }
  @Input() movieId: number;
  @Output() add: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    /*  this.route.params.subscribe(params => {
        id = +params[id]; });
      console.log(this.addMovieToCart(id));*/
  }

  addMovie() {
    this.add.emit(this.movieId);
    console.log('emitted ' + this.movieId);
  }
}



// addToCart() {
// this.add.emit(movieTitle.id);
// }
