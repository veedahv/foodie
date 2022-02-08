import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CuisinesService } from 'src/app/services/cuisines.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  
  constructor(private cuisine: CuisinesService, private cart: CartService) { }

  cartItems: any = []
  cuisines: any = []
  cuisinesCurrentPage: any = []
  currentPage: number = 0;
  totalPages: number = 0;

  ngOnInit() {
    this.getCuisines();
  }

  getCuisines() {
    // this.cart.get().subscribe((data: any) => {
    // this.cart.get().subscribe((data: any) => {
    //   this.cartItems = data;
    //   console.log(this.cartItems);
    // })
        this.cuisine.get().subscribe((data: any) => {
      this.cuisines = data;
      this.totalPages = Math.ceil(this.cuisines.meals.length / 24);
      // this.cuisinesCurrentPage = this.cuisines.meals.slice(this.currentPage * 24, ((this.currentPage * 24) + 24));
      // console.log(this.cuisinesCurrentPage);
      this.cartItems = this.cuisines.meals.slice(this.currentPage * 24, ((this.currentPage * 24) + 24));
      console.log(this.cartItems);
    })
  }


}
