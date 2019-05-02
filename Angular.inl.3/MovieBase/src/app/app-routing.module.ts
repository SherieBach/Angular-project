import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {ProductsComponent} from './products/products.component';
//import {MovieDetailsComponent} from './movie-details/movie-details.component';
//import {AppComponent} from './app.component';

const routes: Routes = [/*{
  path: 'main', component: AppComponent,
  children: [{
    path: 'movies', component: ProductsComponent
  }]},
  {path: 'movie/:id', component: MovieDetailsComponent}*/];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
