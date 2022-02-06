import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Product[] = [
  new Product(1,'Product 1', 'Chicken', 9, "https://www.foodsafetynews.com/files/2016/10/slicedchicken_406x250-1.jpg" ),
  new Product(2,'Product 2', 'Galantina', 10, "http://www.foodsubs.com/Photos/galantina.jpg" ),
  new Product(3,'Product 3', 'Cornbeef', 11, "http://www.foodsubs.com/Photos/cornedbeef.jpg" ),
  new Product(4,'Product 4', 'Sausage', 12, "http://www.foodsubs.com/Photos/hotcalabresesausage.jpg" ),
  new Product(5,'Product 5', 'Pastrami', 13, "http://www.foodsubs.com/Photos/pastrami.jpg" ),
 
]


  constructor() { }
  getProducts(): Product[] {
    return this.products
  }
}
