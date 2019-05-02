import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';


// import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    // NotfoundComponent,
    AppComponent,
    MovieDetailsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
