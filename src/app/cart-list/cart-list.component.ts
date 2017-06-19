import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart/cart.service";
import {Product} from "../product/product";
import {ProductService} from "../product/product.service";


import {mergeResolvedReflectiveProviders} from "@angular/core/src/di/reflective_provider";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers:[CartService,ProductService, CookieService]
})
export class CartListComponent implements OnInit {

  //products: Product[];
  cookieProducts: Map<string,number>;
  cartList: Product[];
  suma :number=  0.0;

  constructor(private cartService: CartService, private  productService: ProductService, private cookieService: CookieService) {
   // this.productService.getProducts().subscribe(data => this.products = data);
    this.cookieProducts = this.cartService.getCookieProducts();
    this.mergerCookiesWithProducts()

  }

  updateSumInCart()
  {
    this.suma = 0.0;
    for(var product of this.cartList) {


      this.suma += product['price'] * product['count'];
      if(product.count < 1)
      {
        this.deleteItemFromArray(product)
      }
    }
  }

  mergerCookiesWithProducts()
  {

   this.cartList = new Array<Product>();
      var prodList: string = "";
    for(let dic in this.cookieProducts)
    {
      console.log("dic: "+dic)
      prodList += dic+","
    }
    prodList = prodList.slice(0, -1);
    this.productService.getProdWithId(prodList,this.cookieProducts).subscribe(data => {

      for(var cookieKey in this.cookieProducts)
      {
        let count = this.cookieProducts[cookieKey];
        for(let cartItem of data){
          if(cartItem.prodId == cookieKey.toString()){
            // console.log(cartItem.prodId);
            cartItem['count'] = count;
          }
        }
      }
      console.log(data);
      this.cartList = data;
      // console.log(this.cartList);
      this.updateSumInCart()
    });
    // this.cookieProducts.forEach(function(value: number, key: string) => {
    //   console.log(key, value);
    //   // result = result.find()
    // });





  }
deleteItemFromArray(prod: Product)
{
  var index = this.cartList.indexOf(prod, 0);
  if (index > -1) {
    this.cartList.splice(index, 1);
  }
  this.updateSumInCart()

}
  deleteItem(prod: Product)
  {

    this.cartService.deleteItem(prod).subscribe(
      productsMap=> {
        var delProductId :string
        for (var cookieKey in productsMap) {
          let count = productsMap[cookieKey];
          for (var cartItem of this.cartList) {
            if (cartItem.prodId == cookieKey.toString()) {
              console.log("count now: =" + count)
              cartItem['count'] = count;
              if(count <1 && cartItem.prodId == prod.prodId) {
                this.deleteItemFromArray(cartItem)
                delProductId = cartItem.prodId
              } //delProduct = cartItem
            }
          }
        }


        this.updateSumInCart()
      }
    )



    console.log(prod.prodId)

  }



  check(x, name) {
  if (x == null) {
    console.log(name + ' == null');
  }

  if (x === null) {
    console.log(name + ' === null');
  }

  if (typeof x === 'undefined') {
    console.log(name + ' is undefined');


}
    console.log(x)
  }

  goToSignUp()
  {

    this.updateSumInCart()
    window.location.href = './orderAdress';

  }



  ngOnInit() {
  }





}
