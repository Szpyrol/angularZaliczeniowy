import { Component } from '@angular/core';

import {CookieService} from 'angular2-cookie/core';
//import  {AuthService} from 'auth0-js/build/auth0.min.js'
//import { AuthService } from 'ang';
import {CartService} from "./cart/cart.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent
{

  constructor(private _cookieService:CookieService)
  {
    //auth.handleAuthentication();
    //_cartService.noti
  }


  title = 'Wykwintne alkohole'
  itemsNr = 0;

  notifyCartIcon(newCount:  number){

    console.log("notificated" + newCount)

    this.itemsNr = <number> newCount;

}


}
