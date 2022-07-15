import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';
import { ConsultBillPageComponent } from './pages/consult-bill-page/consult-bill-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { DashBoardComponent } from './pages/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { PasswordPageComponent } from './pages/password-page/password-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';


const routes: Routes = [
  {path: '', component: DashBoardComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'client-page', component: ClientPageComponent},
  {path: 'product-page', component: ProductPageComponent},
  {path: 'bill-page', component: BillPageComponent},
  {path: 'bill-page/:consult-bill-page', component: ConsultBillPageComponent},
  {path: 'setting-page', component: SettingPageComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'password-page', component: PasswordPageComponent},
  {path: 'notifications-page', component: NotificationsPageComponent},
  {path: 'help-page', component: HelpPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }