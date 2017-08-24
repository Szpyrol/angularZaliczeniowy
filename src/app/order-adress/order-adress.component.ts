import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart/cart.service";
import {Product} from "../product/product";
import {ProductService} from "../product/product.service";
import {OrderAdressService} from "../orderAdress/order-adress.service";
import { FormBuilder,FormsModule, Validators } from '@angular/forms';
import {FacebookService, InitParams, LoginResponse} from "ngx-facebook";
import {ActivatedRoute} from "@angular/router";
import {AuthHandlerService} from "../auth-handler/auth-handler.service";
import {UserData} from "../auth-handler/UserData";

@Component({
  selector: 'app-order-adress',
  templateUrl: './order-adress.component.html',
  styleUrls: ['./order-adress.component.css'],
  providers:[CartService,ProductService, OrderAdressService,AuthHandlerService]

})
export class OrderAdressComponent implements OnInit {


  public orderForm = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    adress: ["", Validators.required]
  });
  //private fb: FacebookService
  constructor(private cartService: CartService, public formBuilder: FormBuilder, private  orderAdressService: OrderAdressService, private  fb:FacebookService, private route: ActivatedRoute, private auth: AuthHandlerService) {// fajna sprawa do pokazania



   // fb.init(initParams);

    console.log("construcot in order adress! ")
    var  code = this.route.snapshot.queryParams["code"];
    var provider = this.route.snapshot.queryParams["provider"]
  //./  this.categoriesService.getCategories().subscribe(data => this.categories = data);
  this.auth.getUserData(code,provider).subscribe(response =>
  {
    var user: UserData = <UserData> response // console.log(response)

    this.orderForm.controls['firstName'].setValue(user.firstName )
    this.orderForm.controls['lastName'].setValue(user.lastName )



  })



  }


  loginWithFacebook(): void {

/*    this.fb.login()
      .then((response: LoginResponse) =>
      {
        console.log(response);
        this.fb.api('/me/feed', 'post', {message: 'Hello, world!'});
      }
      )
      .catch((error: any) => console.error(error));
*/
    console.log("loginWithFacebook");
    window.location.href = 'http://localhost:9000/authenticate/google';



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
