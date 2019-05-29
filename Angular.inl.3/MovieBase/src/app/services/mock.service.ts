
import {Injectable} from '@angular/core';
import {IMovie} from '../interfaces/IMovie';
import {Observable, of} from 'rxjs';
import {IDataservice} from '../interfaces/IDataservice';
import {IOrderItem} from '../interfaces/IOrderItem';

@Injectable({
  providedIn: 'root'
})
export class MockService implements IDataservice {
  constructor() {
  }
  movies: IMovie[] = [
    {id: 1, name: 'hej', price: 234, categoryId: 8, description: 'hej', imageUrl: 'jo'},
    {id: 2, name: 'hej', price: 234, categoryId: 6, description: 'hej', imageUrl: 'jo'},
    {id: 3, name: 'poop', price: 234, categoryId: 5, description: 'hej', imageUrl: 'jo'}, {
      id: 4,
      name: 'hej',
      price: 234,
      categoryId: 4,
      description: 'hej',
      imageUrl: 'jo'
    }
  ];


  postOrder(orderRows: IOrderItem[]) {
    return of();
  }

  getAll(): Observable<IMovie[]> {
    return of(this.movies);
  }

  getMovie(id: number): Observable<IMovie> {
    return of();
  }

  search(search: string): Observable<IMovie[]> {
    return of(this.movies);
  }

  genre(categoryId: number, name: string): Observable<IMovie[]> {
    return undefined;
  }

}

