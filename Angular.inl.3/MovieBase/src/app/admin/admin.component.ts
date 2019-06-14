import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {MovieService} from '../services/movie.service';
import {IOrderSum, IOrderSumRow} from '../interfaces/IOrderSum';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: MovieService, private cartService: CartService) {
  }

  allOrders: IOrderSum[];

  ngOnInit() {
    this.fetchedOrders();
  }

  //
  /* this.service.getAllOrders().subscribe(listOfOrders => {
     listOfOrders.forEach((order) => {
       this.service.deleteOrder(order.id).subscribe(data => {
         console.log(JSON.stringify(data));
       });
     });
   });*/

  fetchedOrders() {
    this.service.getAllOrders().subscribe(listOfOrders => {
      this.allOrders = listOfOrders;
    });
  }
}

