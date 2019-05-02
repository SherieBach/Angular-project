import {Component, OnInit} from '@angular/core';
import {IMovie} from '../interfaces/IMovie';
import {MovieService} from '../services/movie.service';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private movieService: MovieService) {}

  // @Input movieTitle : IMovie;
  // @Output add : new EventEmitter <number>();
  //
  pageTitle = 'Detailed List';
  movie: IMovie;
  errorMessage = '';

  ngOnInit() {

  }

  getMovie(id: number) {

   /* this.route.params.subscribe(params => {
      const id: number = +params[id]; //
      this.getMovie(id);*/

      this.movieService.getMovie(id).subscribe(movie => this.movie = movie,
        error => this.errorMessage = error as any);
    }

  }

  // addToCart() {
  // this.add.emit(movieTitle.id);
  // }


