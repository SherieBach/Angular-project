import { IMovie } from '../interfaces/IMovie';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  const aMovie: IMovie = {id: 1, name: 'hej', price: 234, categoryId: 8, description: 'hej', imageUrl: 'jo'};

  beforeEach(() => {
    service = new CartService();
    service.clearCart();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have an empty cart', () => {
    expect(service.getCartItems().length).toBe(0); // expect cartItems array to be empty = 0
    expect(service.getCartItems()).toEqual([]);  // equal to be same empty cartItems array

  });
  it('should contain an added movie', () => {
    service.addToCart(aMovie);
    expect(service.getCartItems()).toEqual([aMovie]);
  });

  it('should delete one item', () => {
    service.deleteFromCart(aMovie.id);
    expect(service.getCartItems()).toEqual([]);
  });
});
