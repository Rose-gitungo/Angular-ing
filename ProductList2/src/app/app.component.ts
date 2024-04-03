import { Component } from '@angular/core';
import ProductJson from '../assets/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ProductList';
  ngOnInit() {
    localStorage.setItem('products', JSON.stringify(ProductJson));
  }
}
