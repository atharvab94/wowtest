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
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

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
    LoginComponent
   
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
