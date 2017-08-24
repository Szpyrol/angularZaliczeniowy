import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {AppComponent} from "../app.component";
import {UserData} from "./UserData";


@Injectable()
export class AuthHandlerService {

  constructor(private  appComponent: AppComponent, private http: Http) {



  }



  getUserData(key: string, provider: string) {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({headers: headers});

    var param: string = provider;
    if(provider != 'facebook')
      param = 'google';

   return this.http.get('http://localhost:9000/authenticate/'+param+'?code='+key, options)
      .map(response => <UserData>response.json());
  }







}
