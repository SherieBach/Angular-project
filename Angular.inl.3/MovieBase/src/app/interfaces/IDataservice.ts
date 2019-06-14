import {Observable} from 'rxjs';
import {IMovie} from './IMovie';
import {IOrderItem} from './IOrderItem';
import {IOrder} from './IOrder';
import {IOrderSum} from './IOrderSum';

export interface IDataservice {
  getMovie(id: number): Observable<IMovie>;

  getAll(): Observable<IMovie[]>; // Function for all products
  postOrder(orderRows: IOrderItem[], totalPrice: number, paymentMethod: string, companyId: number,
            createdBy: string, created: string, status: number):
    Observable<IOrder>;

  getAllOrders(): Observable<IOrderSum[]>;

  deleteOrder(id: number): Observable<IOrderSum[]>;
}
