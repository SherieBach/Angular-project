import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from '@angular/forms';
import {AddToCartComponent} from './add-to-cart/add-to-cart.component';
import {CheckoutComponent} from './checkout/checkout.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        [HttpClientModule],
        [FormsModule]
      ],
      declarations: [
        AppComponent,
        ProductsComponent,
        AddToCartComponent,
        CheckoutComponent
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
