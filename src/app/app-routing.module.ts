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
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { MoreOptPageComponent } from './pages/more-opt-page/more-opt-page.component';
import { DashBoardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent
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
    path: 'client-page/:add-client-page',
    component: AddClientPageComponent
  },
  {
    path: 'product-page',
    component: ProductPageComponent
  },
  {
    path: 'product-page/:add-product-page',
    component: AddProductPageComponent
  },
  {
    path: 'bill-page',
    component: BillPageComponent
  },
  {
    path: 'bill-page/:add-bill-page',
    component: AddBillPageComponent
  },
  {
    path: 'more-opt-page',
    component: MoreOptPageComponent
  },
  {
    path: 'setting-page',
    component: SettingPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }