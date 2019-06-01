import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import {IOrderItem} from './IOrderItem';

export interface IDataservice {
  getMovie(id: number): Observable<IMovie>;
  getAll(): Observable<IMovie[]>; // Function for all products
  search(search: string): Observable<IMovie[]>; // Function for searching products
  genre(categoryId: number, name: string): Observable<IMovie[]>; // Functions for getting categories.
  postOrder(orderRows: IOrderItem[], totalPrice: number, paymentMethod: string, companyId: number);
}
