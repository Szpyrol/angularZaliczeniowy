import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Product} from './product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  getProducts() {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({headers: headers});

    return this.http.get('http://localhost:9000/products', options)
      .map(response => <Product[]>response.json());
  }

  getProductsWithCatId(catid: string) {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({headers: headers});
    console.log('http://localhost:9000/prodsForCat?catId=' + catid)
    return this.http.get('http://localhost:9000/prodsForCat?catId=' + catid, options)
      .map(response => <Product[]>response.json());
  }

  getProdWithId(prodIds:string, cookieProducts :Map<string,number>) {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({headers: headers});
    console.log('http://localhost:9000/prodWithId?prodIdsArray=' + prodIds)
    var result = this.http.get('http://localhost:9000/prodWithId?prodIdsArray=' + prodIds, options)
      .map(response => <Product[]>response.json());
    return result


}



}

