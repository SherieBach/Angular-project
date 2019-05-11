import {Component, OnInit} from '@angular/core';
import {IMovie} from '../interfaces/IMovie';
import {MovieService} from '../services/movie.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Shitty movies';
  inputValue = 'the';
  screenView = true;
  movie: IMovie;
  search: IMovie[];

  constructor(private service: MovieService) {
  } // hämtar data från MovieService

  ngOnInit(): void { // Initierar functionerna i Observables functioner från Interface via injectables Movie service

  }

  searchMovie(inputValue: string) {      // parameter som definerar värdet i function som ska sedan skriva ut användaren input.
    this.service.search(this.inputValue).subscribe((data) => {
      this.search = data;
    });
  }
}

/*
addMovieToCart() {
   this.service.getMovie(id).subscribe(movie => {});
 }

getAll() {
  this.service.getAll().subscribe((data) => {
    this.addedMovie = data;
  });
}
}
/*  this.service.getMovie(1).subscribe((data) => {  // listens after what we want to do with the data
   this.addedMovie = data;
 });*/
