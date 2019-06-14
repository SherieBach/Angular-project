import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDataservice} from '../interfaces/IDataservice';
import {IMovie} from '../interfaces/IMovie';
import {IOrderItem} from '../interfaces/IOrderItem';
import {IOrder} from '../interfaces/IOrder';
import {IOrderSum} from '../interfaces/IOrderSum';

// import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IDataservice { // we make a http request here that the observable
  constructor(private http: HttpClient) {
  }

  productURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  ordersURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';

  getMovie(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.productURL}/${id}`);
  }

  getAll(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  postOrder(orderRows: IOrderItem[], totalPrice: number, paymentMethod: string, companyId: number,
            createdBy: string, created: string, status: number):
    Observable<IOrder> {
    const body: IOrder = {
      id: 0,
      companyId,
      paymentMethod,
      totalPrice,
      orderRows,
      createdBy,
      created,
      status
    };
    console.log('POST' + JSON.stringify(body));
    return this.http.post<IOrder>(this.ordersURL, body);
  }

  getAllOrders(): Observable<IOrderSum[]> {
    return this.http.get<IOrderSum[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=19');
  }

  deleteOrder(id: number): Observable<IOrderSum[]> {
    console.log('deleting order ' + id);
    return this.http.delete<IOrderSum[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + id);
  }

}
