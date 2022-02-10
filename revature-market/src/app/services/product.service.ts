import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Product[] = [
  new Product(1,'Product 1', 'Chicken', 9.99, "https://www.foodsafetynews.com/files/2016/10/slicedchicken_406x250-1.jpg" ),
  new Product(2,'Product 2', 'Galantina', 9.99, "http://www.foodsubs.com/Photos/galantina.jpg" ),
  new Product(3,'Product 3', 'Cornbeef', 10.99, "http://www.foodsubs.com/Photos/cornedbeef.jpg" ),
  new Product(4,'Product 4', 'Sausage', 2.99, "http://www.foodsubs.com/Photos/hotcalabresesausage.jpg" ),
  new Product(5,'Product 5', 'Pastrami', 9.99, "http://www.foodsubs.com/Photos/pastrami.jpg" ),
  new Product(6,'Product 6', 'Cheetos', 1.99, "https://i5.peapod.com/c/H4/H4S8Y.png" ),
  new Product(7,'Product 7', 'Lays', 1.99, "data:image/jpeg;base64,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" ),
  new Product(8,'Product 8', 'Doritos', 1.99, "https://m.media-amazon.com/images/I/81-DyMXy6tL._SX679_PIbundle-64,TopRight,0,0_AA679SH20_.jpg" ),
  new Product(9,'Product 9', 'Fuji Apple', 2.99, "data:image/jpeg;base64,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" ),
 
]


  constructor() { }
  getProducts(): Product[] {
    return this.products
  }
}
