import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {Product} from "../product/product";
import {isEmpty} from "rxjs/operator/isEmpty";
import {AppComponent} from "../app.component";
import {updateNotifierCheck} from "tslint/lib/updateNotifier";
import {Observable} from "rxjs";
import {Http, Headers, RequestOptions} from "@angular/http";
import {OrderCart} from './orderCart';

@Injectable()
export class CartService {

  public keytest: string = "prodkeyMap"

  public user

  constructor(private cookieService: CookieService, private  appComponent: AppComponent, private http: Http) {

    // this.keydtest = "testkey
    this.updateCartNumber()
  }

  removeCart()
  {
      this.cookieService.remove(this.keytest);


  }


  updateCartNumber() {
    var count: number = 0;
    var productsMap: Map<string,number> = <Map<string,number>> this.cookieService.getObject(this.keytest)
    if (productsMap != null) {

      /*productsMap.forEach(value => {
       count += value;
       console.log( value);
       });
       */
      for (let dic in productsMap) {
        if (productsMap[dic] != null) {

          // if(productsMap[dic] < 1)
          //   productsMap.delete(dic)

          count += productsMap[dic];
          //console.log("dictionary: " + productsMap[dic]);
        }
      }


      this.appComponent.notifyCartIcon(count)
    }

  }

  getCookieProducts(): Map<string,number> {
    var productsMap: Map<string,number> = < Map<string,number> >this.cookieService.getObject(this.keytest)


    return productsMap
  }


  deleteItem(prod: Product): Observable<Map<string,number>> {
    var productsMap: Map<string,number> = <Map<string,number>> this.cookieService.getObject(this.keytest);


    var countOfprods = productsMap[prod.prodId]
    if (countOfprods > 0)
      productsMap[prod.prodId] = countOfprods - 1;
    else {
    //productsMap.delete(prod.prodId)
     delete productsMap[prod.prodId]

    }
      //delete productsMap[prod.prodId]sdfsdfs

    this.cookieService.putObject(this.keytest, productsMap);
    this.updateCartNumber()
    return Observable.of(productsMap)


  }





  addToCart(prod: Product) {

    console.log(prod);

    var productsMap: Map<string,number> = <Map<string,number>> this.cookieService.getObject(this.keytest);

    if (productsMap == null) {
      productsMap = new Map<string, number >();
      productsMap[prod.prodId] = 1;
    }
    else {
      if (productsMap[prod.prodId] == null)
        productsMap[prod.prodId] = 1
      else
        productsMap[prod.prodId] = productsMap[prod.prodId] + 1;

    }


    //products.push(prod.prodId);

    console.log("product:" + productsMap[prod.prodId]);

    this.cookieService.putObject(this.keytest, productsMap);
    this.updateCartNumber()

  }




  sendOrder(userData:any): Observable<Map<string,string>> {


    this.user = userData

    console.log('http://localhost:9000/newOrder')

    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.cookieService.put("firstName", userData["firstName"])
    this.cookieService.put("lastName", userData["lastName"])
    this.cookieService.put("adress", userData["adress"])


    const options = new RequestOptions({headers: headers});
    console.log('http://localhost:9000/newOrder');

    //debugger;
    var ordered: OrderCart;// = new Order();
    ordered = new OrderCart();
    ordered.orderId = 0;
    ordered.userName = userData["firstName"] + " " +userData["lastName"]
    ordered.prodsList =  JSON.stringify(this.getCookieProducts()).toString()
    ordered.adress = userData["adress"]


    console.log("body to Send: "+JSON.stringify(ordered));
   // debugger;
    this.http.post('http://localhost:9000/newOrder', JSON.stringify(ordered), options).subscribe(data => {
      console.log("user: " + this.cookieService["user"]);


      window.location.href = './orderSummary';

    })


    return Observable.of(userData)

  }
}
