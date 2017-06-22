import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart/cart.service";
import {Product} from "../product/product";
import {ProductService} from "../product/product.service";
import {OrderAdressService} from "../orderAdress/order-adress.service";
import { FormBuilder,FormsModule, Validators } from '@angular/forms';
import {FacebookService, InitParams, LoginResponse} from "ngx-facebook";

@Component({
  selector: 'app-order-adress',
  templateUrl: './order-adress.component.html',
  styleUrls: ['./order-adress.component.css'],
  providers:[CartService,ProductService, OrderAdressService]

})
export class OrderAdressComponent implements OnInit {

  public orderForm = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    adress: ["", Validators.required]
  });
  //private fb: FacebookService
  constructor(private cartService: CartService, public formBuilder: FormBuilder, private  orderAdressService: OrderAdressService, private  fb:FacebookService) {// fajna sprawa do pokazania




    let initParams: InitParams = {
      appId: '1932787296934990',
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);

  }


  loginWithFacebook(): void {

    this.fb.login()
      .then((response: LoginResponse) =>
      {
        console.log(response);
        this.fb.api('/me/feed', 'post', {message: 'Hello, world!'});
      }
      )
      .catch((error: any) => console.error(error));


  }



  ngOnInit() {
  }


  doBuy(event) {

    console.log(this.orderForm.value);
    this.cartService.sendOrder(this.orderForm.value).subscribe(user=>
      {

        //this.firstName = user["firstName"]
      }

    )
    /*
    if(this.orderForm.value['firstName'].length < 1 || this.orderForm.value['lastName'].length<1 || this.orderForm.value['adress'].length<1)
    {
        alert("Nie zapomniałeś o czymś?");

    }
    else
    {


    }
*/
  }
}
