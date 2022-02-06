import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

@Input() productItem!: Product

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }
handleAddToCart(){
  this.msg.sendMsg(this.productItem)
}
}
