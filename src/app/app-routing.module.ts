import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CartManagementComponent } from './cart-management/cart-management.component';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'home', component: MainComponentComponent },
  { path: 'user', component: UserManagementComponent },
  { path: 'user/:userId', component: UserManagementComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartManagementComponent },
  // { path: 'home',   redirectTo: '/home', pathMatch: 'full' },
  
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

  
 }
