import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems = [
  {id: 1,productId:1,productName: 'test1', qty: 4, price: 100 },
  {id: 2,productId:2,productName: 'test2', qty: 5, price: 100 },
  {id: 3,productId:3,productName: 'test3', qty: 3, price: 100 },
  {id: 4,productId:4,productName: 'test4', qty: 4, price: 100 }
];

cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe(product => {
      console.log(product)
    })
  this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
