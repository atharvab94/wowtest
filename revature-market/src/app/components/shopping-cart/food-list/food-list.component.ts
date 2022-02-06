import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
productList: Product[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.productList = this.productService.getProducts()
  }

}
