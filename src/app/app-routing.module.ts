import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';
import { AddBillPageComponent } from './pages/add-bill-page/add-bill-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClientPageComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
  path: 'sign-up',
  component: SignUpComponent
  },
  {
    path: 'client-page',
    component: ClientPageComponent
  },
  {
    path: 'product-page',
    component: ProductPageComponent
  },
  {
    path: 'bill-page',
    component: BillPageComponent
  },
  {
    path: 'add-client-page',
    component: AddClientPageComponent
  },
  {
    path: 'add-product-page',
    component: AddProductPageComponent
  },
  {
    path: 'add-bill-page',
    component: AddBillPageComponent
  },
 


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }