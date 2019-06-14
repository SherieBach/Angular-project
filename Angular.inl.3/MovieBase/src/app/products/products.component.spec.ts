import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductsComponent} from './products.component';
import {MovieService} from '../services/movie.service';
import {MockService} from '../services/mock.service';
import {FormsModule} from '@angular/forms';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [FormsModule]
    })
      .overrideComponent(ProductsComponent, {
        set:
          {
            providers: [{
              provide: MovieService,
              useClass: MockService
            }]
          }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /* it('should show all movies from the search function parameter', () => {
    component.searchMovie();
    expect(component.search.length).toBe(4); // from mockservice
  });*/
});
