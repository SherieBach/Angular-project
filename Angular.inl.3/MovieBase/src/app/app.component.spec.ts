import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from '@angular/forms';
import {CartComponent} from './cart/cart.component';
import { RouterTestingModule } from '@angular/router/testing';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        [HttpClientModule],
        [FormsModule],
        [RouterTestingModule]
      ],
      declarations: [
        AppComponent,
        ProductsComponent,
        CartComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AirFlick'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AirFlick');
  });
});
