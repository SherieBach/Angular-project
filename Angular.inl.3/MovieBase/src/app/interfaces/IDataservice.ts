import { Observable } from 'rxjs';
import { IMovie } from './IMovie';

export interface IDataservice {
  getMovie(id: number); // Function for adding product to cart
  getAll(): Observable<IMovie[]>; // Function for all products
  search(search: string): Observable<IMovie[]>; // Function for searching products
  genre(categoryId: number, name: string): Observable<IMovie[]>; // Functions for getting categories.
  // delete(id: number): Observable<IMovie>
}
