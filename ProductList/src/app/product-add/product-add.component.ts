import { Component } from '@angular/core';

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string
}

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  products: Product[] = [];

  addProduct(event: Event) {

    event.preventDefault();
    const storedProducts = localStorage.getItem('products');

    const inputid = (document.querySelector('input[name="id"]') as HTMLInputElement).value;
    const inputTitle = (document.querySelector('input[name="title"]') as HTMLInputElement).value;
    const inputDescription = (document.querySelector('input[name="description"]') as HTMLInputElement).value;
    const inputPrice = (document.querySelector('input[name="price"]') as HTMLInputElement).value;
    const inputDisc = (document.querySelector('input[name="discountPercentage"]') as HTMLInputElement).value;
    const inputRating = (document.querySelector('input[name="rating"]') as HTMLInputElement).value;
    const inputStock = (document.querySelector('input[name="stock"]') as HTMLInputElement).value;
    const inputBrand = (document.querySelector('input[name="brand"]') as HTMLInputElement).value;
    const inputCategory = (document.querySelector('input[name="category"]') as HTMLInputElement).value;
    const inputThumbnail = (document.querySelector('input[name="thumbnail"]') as HTMLInputElement).value;
    const inputImages = (document.querySelector('input[name="images"]') as HTMLInputElement).value;

    if (inputid.trim() === "" ||
      inputTitle.trim() === "" ||
      inputDescription.trim() === "" ||
      inputPrice.trim() === "" ||
      inputDisc.trim() === "" ||
      inputRating.trim() === "" ||
      inputStock.trim() === "" ||
      inputBrand.trim() === "" ||
      inputCategory.trim() === "" ||
      inputThumbnail.trim() === "" ||
      inputImages.trim() === "") {
      alert("Fill in all Values");
      return;
    }

    const productAdd: Product = {
      id: parseInt(inputid),
      title: inputTitle,
      description: inputDescription,
      price: parseInt(inputPrice),
      discountPercentage: parseInt(inputDisc),
      rating: parseInt(inputRating),
      stock: parseInt(inputStock),
      brand: inputBrand,
      category: inputCategory,
      thumbnail: inputThumbnail,
      images: inputImages
    };

    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
      this.products.push((productAdd));
      alert('product is added!')
      localStorage.setItem("products", JSON.stringify(this.products));
    }
  }
}
