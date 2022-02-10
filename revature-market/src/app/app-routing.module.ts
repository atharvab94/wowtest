import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EndComponent } from './components/end/end.component';

const routes: Routes = [
  {path:'', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingCartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'end', component: EndComponent},

];

=======
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {component:LoginComponent, path:'Login'},
];
>>>>>>> 6735f94b8f8c6660244d375921f0679d868c6baf
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]


