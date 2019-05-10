import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {CheckoutComponent} from './checkout/checkout.component';


const routes: Routes = [{path: 'Home', component: AppComponent},
  {path: 'Movies', component: ProductsComponent},
  {path: 'Movies/:id', component: CheckoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
