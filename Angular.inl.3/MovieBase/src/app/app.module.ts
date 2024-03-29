import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './compontents/navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    // NotfoundComponent,
    AppComponent,
    ProductsComponent,
    CartComponent,
    NavbarComponent,
    FormComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
