import { Component, OnInit } from '@angular/core';
import {CookieService} from "angular2-cookie/services/cookies.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[CookieService]
})
export class CartComponent implements OnInit {

  constructor(private _cookieService:CookieService){}


  ngOnInit() {
  }

}
