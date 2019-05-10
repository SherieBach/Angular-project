import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDataservice} from '../interfaces/IDataservice';
import {IMovie} from '../interfaces/IMovie';

// import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IDataservice { // we make a http request here that the observable
  productURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  searchURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/search';
  MovieGenre = 'https://medieinstitutet-wie-products.azurewebsites.net/api/category';
 // endPoint = '';

  constructor(private http: HttpClient) {
  }

  addMovieToCart(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(this.productURL);
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
    return this.http.get<IMovie[]>(this.searchURL, searchOptions); // return the
    /*.pipe(
      catchError(this.handleError<IMovie[]>('search', []))*/
  }

  genre(categoryId: number, name: string): Observable<IMovie[]> {
    return undefined;
  }

}
