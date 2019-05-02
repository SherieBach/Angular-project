import { Observable } from 'rxjs';
import { IMovie } from './IMovie';

export interface IDataservice {
  getMovie(id: number): Observable<IMovie>;
  getAll(): Observable<IMovie[]>; // function for all products
  search(search: string): Observable<IMovie[]>;
  // delete(id: number): Observable<IMovie>
}

