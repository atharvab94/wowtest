import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { FoodListComponent } from './components/shopping-cart/food-list/food-list.component';
import { FoodItemComponent } from './components/shopping-cart/food-list/food-item/food-item.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EndComponent } from './components/end/end.component';
=======
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
>>>>>>> 6735f94b8f8c6660244d375921f0679d868c6baf

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ShoppingCartComponent,
    CartComponent,
    FiltersComponent,
    FoodListComponent,
    FoodItemComponent,
    CartItemComponent,
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    EndComponent
=======
    LoginComponent
   
>>>>>>> 6735f94b8f8c6660244d375921f0679d868c6baf
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent}
    ]),
  ],
    
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
