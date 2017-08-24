import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {RouterModule} from "@angular/router";
import {ProductService} from "./product/product.service";
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import {CategoryService} from "./categories/category.service";
import {DashboardService} from "./dashboard/dashboard.service";
import {CartService} from "./cart/cart.service";
import {CookieService} from "angular2-cookie/services/cookies.service";
import { CartListComponent } from './cart-list/cart-list.component';
import { OrderAdressComponent } from './order-adress/order-adress.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {OrderAdressService} from "./orderAdress/order-adress.service";
import {OrderSummaryService} from "./orderSummary/order-summary.service";
//import { CuppaOAuthModule } from 'cuppaOAuth/cuppaOAuth.module';
//import  {Cuppa0AuthModule} from  './cu'
import { ReactiveFormsModule } from '@angular/forms';
import {FacebookModule} from "ngx-facebook";
import {AuthHandlerService} from "./auth-handler/auth-handler.service";
//import { FacebookModule } from 'ngx-facebook';
//import  {Ang}




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoriesComponent,
    DashboardComponent,
    CartComponent,
    CartListComponent,
    OrderAdressComponent,
    OrderSummaryComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FacebookModule.forRoot(),
    //CuppaOAuthModule,
    RouterModule.forRoot([

      {path:'products',   component: ProductComponent},
      {path:'categories', component: CategoriesComponent},
      {path:'dashboard',  component: DashboardComponent},
      {path:'cart', component: CartComponent},
      {path:'cartlist',component: CartListComponent},
      {path:'orderAdress', component: OrderAdressComponent},
      {path:'orderSummary',component: OrderSummaryComponent},
      {path:'**',  component: DashboardComponent}
    ])
  ],
  providers: [
    ProductService,
    CategoryService,
    DashboardService,
    CartService,
    CookieService,
    OrderAdressService,
    OrderSummaryService,
    AuthHandlerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {





}

