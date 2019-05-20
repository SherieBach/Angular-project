import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CartComponent} from './cart/cart.component';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [{path: '..', component: AppComponent},
  {path: 'Cart', component: CartComponent},
  {path: 'Shop', component: ProductsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// export const routingCompenents = [AppComponent];

