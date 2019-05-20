import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartComponent } from './add-to-cart.component';
import { HttpClientModule} from '@angular/common/http';
import {IMovie} from '../interfaces/IMovie';

describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(async(() => {
    window.localStorage.clear(); // runs and clears local storage before each test
    TestBed.configureTestingModule({
      declarations: [ AddToCartComponent ], imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an empty cart', () => {
    expect(component.getCartItems().length).toBe(0); // expect cartItems array to be empty = 0
    expect(component.getCartItems()).toEqual([]);  // equal to be same empty cartItems array

  });
  it('should contain an added movie', () => {
    const aMovie: IMovie = {id: 1, name: 'hej', price: 234, categoryId: 8, description: 'hej', imageUrl: 'jo'};
    component.addedMovie = aMovie;
    component.addToCart();
    expect(component.getCartItems()).toEqual([aMovie]);
  });

  it('should delete one item', () => {
    const aMovie: IMovie = {id: 1, name: 'hej', price: 234, categoryId: 8, description: 'hej', imageUrl: 'jo'};
    component.addedMovie = aMovie;
    // expect(component.getCartItems()).toBe([aMovie]);
    component.deleteFromCart(aMovie);
    // console.log(component.getCartItems())
    expect(component.getCartItems()).toEqual([]);

  });
});
