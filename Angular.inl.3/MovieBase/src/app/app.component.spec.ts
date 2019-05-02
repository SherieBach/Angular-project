import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from '@angular/forms';


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
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MovieBase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MovieBase');
  });
});
