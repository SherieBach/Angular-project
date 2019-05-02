import {Component, OnInit} from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Shitty movies';
  inputValue = '';
  screenView = true;
  movie: IMovie;

  // movies: IMovie[];
  search: IMovie[];
 // movieTitle: string;
  // errorMessage = '';

  constructor(private service: MovieService) { } // hämtar data från MovieService

  ngOnInit(): void { // Initierar functionerna i Observables functioner från Interface via injectables Movie service

  /*  this.service.getMovie(1).subscribe((data) => {  // listens after what we want to do with the data
      this.movie = data;
    });

    this.service.getAll().subscribe((data) => {
      this.movies = data;
    });
    */
  }

  searchMovie(inputValue: string) {      // parameter som definerar värdet i function som ska sedan skriva ut användaren input.
    this.service.search(this.inputValue).subscribe((data) => {
      this.search = data;
    });
  }




}
