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
  inputValue = 'the';
  // screenView = true;
  movie: IMovie;
  search: IMovie[];

  constructor(private service: MovieService, private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  searchMovie(inputValue: string) {      // parameter som definerar värdet i function som ska sedan skriva ut användaren input.
    this.service.search(this.inputValue).subscribe((data) => {
      this.search = data;
    });
  }
}
