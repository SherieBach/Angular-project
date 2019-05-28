import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CartComponent} from './cart/cart.component';
import {ProductsComponent} from './products/products.component';


// import { NotfoundComponent } from './notfound/notfound.component';
const appRoutes: Routes = [{path: '..', component: AppComponent},
  {path: 'Cart', component: CartComponent},
  {path: 'Shop', component: ProductsComponent }];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// export const routingCompenents = [AppComponent];

