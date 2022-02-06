export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id = 0, name = '', description = '',price = 0, imageUrl = 'https://www.verywellfit.com/thmb/EIwd5S9lk_-vIMlKlw4hEA0VXyU=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/deli-meat-crop-a43dd9d2d5704cf6bff81bb31c27a4b8.jpg'){
     this.id = id
     this.name = name
     this.description = description
     this.price = price
     this.imageUrl = imageUrl

    }
}


