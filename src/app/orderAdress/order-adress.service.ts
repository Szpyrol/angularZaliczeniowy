import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {CookieService} from "angular2-cookie/services/cookies.service";


@Injectable()
export class OrderAdressService {

  userInAdress:Map<string,string>

  constructor(private http: Http, private  cookieService: CookieService) {
  }











    // var result = this.http.get('http://localhost:9000/prodWithId?prodIdsArray=' + prodIds, options)
   //   .map(response => <Product[]>response.json());
    //return result





}
