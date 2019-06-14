import {Component, OnInit} from '@angular/core';
import {IMovie} from '../interfaces/IMovie';
import {MovieService} from '../services/movie.service';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  search: IMovie[];
  allMovies: IMovie[];

  constructor(private service: MovieService, private cartService: CartService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(movies => {
      this.allMovies = movies;
      console.log(movies);
    });
  }
}
