import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product";
import {CartService} from "../cart/cart.service";
import {ProductService} from "../product/product.service";
import {OrderAdressService} from "../orderAdress/order-adress.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  providers:[CartService,ProductService]
})
export class OrderSummaryComponent implements OnInit {

  lastName: string;
  adress: string;

  cookieProducts: Map<string,number>;
  cartList: Product[];
  firstName: string;



  constructor(private cartService: CartService, private  productService: ProductService, private  orderAdressService: OrderAdressService, private cookieServie: CookieService) {
    this.cookieProducts = this.cartService.getCookieProducts();
    this.mergerCookiesWithProducts()
    this.getUser()
    this.cartService.removeCart()
  }

    ngOnInit() {
  }


  //var products: Product[];

  getUser(){

   // var body = this.orderAdressService.userInAdress
   // var body: Map<string,string> = this.cookieServie["body"];
    //debugger;
    this.firstName = this.cookieServie.get("firstName");
    this.lastName  = this.cookieServie.get("lastName");
    this.adress    = this.cookieServie.get("adress");

    //this.cartService.user["firstName"]


    //this.lastName = body["lastName"]
    //this.adress = body["adress"]


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
      this.cartList = data
      for(var cookieKey in this.cookieProducts)
      {
        let count = this.cookieProducts[cookieKey];
        for(let cartItem of  this.cartList ){
          if(cartItem.prodId == cookieKey.toString()) {
            console.log("count: " + cartItem['count']);
            if (count) {

                if (count < 1)
                  this.deleteItemFromArray(cartItem)
                else
                  cartItem['count'] = count;
             }else {
                 this.deleteItemFromArray(cartItem)
                 // debugger;
            }
          }
        }
      }
      console.log(data);


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


  }
}
