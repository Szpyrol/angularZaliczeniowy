import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart/cart.service";
import {Product} from "../product/product";
import {ProductService} from "../product/product.service";
import {OrderAdressService} from "../orderAdress/order-adress.service";
import { FormBuilder,FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-adress',
  templateUrl: './order-adress.component.html',
  styleUrls: ['./order-adress.component.css'],
  providers:[CartService,ProductService, OrderAdressService]

})
export class OrderAdressComponent implements OnInit {

  public orderForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    adress: ["", Validators.required]
  });
  constructor(private cartService: CartService, public fb: FormBuilder, private  orderAdressService: OrderAdressService) {// fajna sprawa do pokazania




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
