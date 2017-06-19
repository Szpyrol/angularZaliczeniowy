import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product/product.service";
import {CategoryService} from "../categories/category.service";
import {CartService} from "../cart/cart.service";

import {Category} from "../categories/category";
import {Product} from "../product/product";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CategoryService,ProductService, CartService]
})
export class DashboardComponent implements OnInit {

  constructor(private categoriesService: CategoryService, private  productsService: ProductService, private cartService: CartService) { }

  categories: Category[];
  products: Product[];

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(data => this.categories = data);
    this.productsService.getProductsWithCatId("1").subscribe(data => this.products = data);
  }

  productSelected(prod: Product)
  {

   // console.log(JSON.stringify(prod));
   this.cartService.addToCart(prod)



  }
  categorySelected(cat: Category)
  {

    this.productsService.getProductsWithCatId(""+cat.catId).subscribe(data => this.products = data);
    console.log(JSON.stringify(cat));
  }


}
