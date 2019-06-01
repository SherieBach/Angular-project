import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDataservice} from '../interfaces/IDataservice';
import {IMovie} from '../interfaces/IMovie';
import {IOrderItem} from '../interfaces/IOrderItem';
import {IOrder} from '../interfaces/IOrder';

// import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IDataservice { // we make a http request here that the observable
  constructor(private http: HttpClient) {
  }

  productURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  searchURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/search';
  ordersURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';

  getMovie(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.productURL}/${id}`);
  }

  getAll(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.productURL);
  }

  search(search: string): Observable<IMovie[]> {
    const searchValue = search.trim();
    const params = new HttpParams();
    const searchOptions = searchValue ? {params: params.set('searchText', searchValue)} : {};
    // if searchVAl matches search term then set the key to this name or nothing will show.
    console.log('searching for' + searchValue);
    return this.http.get<IMovie[]>(this.searchURL, searchOptions);
  }

  genre(categoryId: number, name: string): Observable<IMovie[]> {
    return undefined;
  }


  postOrder(orderRows: IOrderItem[], totalPrice: number, paymentMethod: string, companyId: number): Observable<HttpResponse<object>> {
    const body: IOrder = {
      companyId,
      paymentMethod,
      totalPrice,
      orderRows
    };
    console.log('POST');
    return this.http.post(this.ordersURL, body, {observe: 'response'});
  }

}
