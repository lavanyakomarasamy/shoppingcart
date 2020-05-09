import { Component } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ALL Tee';
  products: IProduct[] = [];

  constructor() {
    this.products = this.getProductist();
  }

  changeImage(event, imageUrl) {    
    event.currentTarget.src = imageUrl;
  }
  getProductist(): IProduct[] {
    return [
      {        
        "ProductId": 1,
        "ProductName": "Basic Half Sleeve T-shirt",
        "Price": 459,
        "Quantity": 5,
        "FrontImageUrl": "assets/img/basic_front.jpg",
        "BackImageUrl": "assets/img/basic_back.jpg",
      },
      {
        "ProductId": 2,
        "ProductName": "Long Sleeve Crew Neck T-shirts",
        "Price": 699,
        "Quantity": 200,
        "FrontImageUrl": "assets/img/fullsleeve_front.jpg",
        "BackImageUrl": "assets/img/fullsleeve_back.jpg"
      },
      {
        "ProductId": 3,
        "ProductName": "Polo Collar T-shirt",
        "Price": 1400,
        "Quantity": 9,
        "FrontImageUrl": "assets/img/polo_front.jpg",
        "BackImageUrl": "assets/img/polo_back.jpg"
      },
      {
        "ProductId": 4,
        "ProductName": "Henley Collar T-shirt",
        "Price": 2000,
        "Quantity": 100,
        "FrontImageUrl": "assets/img/henley_front.jpg",
        "BackImageUrl": "assets/img/henley_back.jpg"
      }
    ];
  }
}
