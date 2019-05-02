
import {Injectable} from '@angular/core';
import {IMovie} from '../interfaces/IMovie';
import {Observable, of} from 'rxjs';
import {IDataservice} from '../interfaces/IDataservice';

@Injectable({
  providedIn: 'root'
})
export class MockService implements IDataservice {
  movies: IMovie[] = [
    {id: 1, name: 'hej', price: 234, category: 'crime', description: 'hej', imageUrl: 'jo'},
    {id: 2, name: 'hej', price: 234, category: 'crime', description: 'hej', imageUrl: 'jo'},
    {id: 3, name: 'poop', price: 234, category: 'crime', description: 'hej', imageUrl: 'jo'}, {
      id: 4,
      name: 'hej',
      price: 234,
      category: 'crime',
      description: 'hej',
      imageUrl: 'jo'
    }
  ];


  getAll(): Observable<IMovie[]> {
    return of(this.movies);
  }

  constructor() {
  }

  getMovie(id: number): Observable<IMovie> {
    return undefined;
  }

  search(search: string): Observable<IMovie[]> {
    return of(this.movies);
  }
}

