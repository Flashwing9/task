import { Routes } from '@angular/router';
import { ProductsListComponent } from './core/components/products-list/products-list.component';
import { CartComponent } from './core/components/cart/cart.component';
import { CheckoutComponent } from './core/components/checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
