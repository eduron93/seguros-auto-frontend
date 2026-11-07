import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Products } from './pages/products/products';
import { Quotation } from './pages/quotation/quotation';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'products',
    component: Products,
    canActivate: [authGuard]
  },
  {
    path: 'quotation/:productId',
    component: Quotation,
    canActivate: [authGuard]
  },
  {
    path: 'quotation',
    component: Quotation,
    canActivate: [authGuard]
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];
