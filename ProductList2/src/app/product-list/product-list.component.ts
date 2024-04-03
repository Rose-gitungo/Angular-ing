import { Component } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent {

  products: Product[] = [];

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
      console.log("Error, No products in local storage")
    }
  }

  deleteProduct(id: any) {
    if (confirm("Delete product?")) {
      this.products = this.products.filter(product => product.id !== id);
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }
}
