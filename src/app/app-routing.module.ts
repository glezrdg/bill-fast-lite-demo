import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/session-module/sign-up/sign-up.component';
import { LogInComponent } from './pages/session-module/log-in/log-in.component';
import { ClientPageComponent } from './pages/main-module/client-page/client-page.component';
import { ProductPageComponent } from './pages/main-module/product-page/product-page.component';
import { BillPageComponent } from './pages/main-module/bill-page/bill-page.component';
import { ConsultBillPageComponent } from './pages/main-module/consult-bill-page/consult-bill-page.component';
import { SettingPageComponent } from './pages/setting-module/setting-page/setting-page.component';
import { DashBoardComponent } from './pages/main-module/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './pages/session-module/forgotpassword/forgotpassword.component';
import { PasswordPageComponent } from './pages/setting-module/password-page/password-page.component';
import { NotificationsPageComponent } from './pages/setting-module/notifications-page/notifications-page.component';
import { HelpPageComponent } from './pages/setting-module/help-page/help-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path: 'dashboard', component: DashBoardComponent},
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
  {path: 'help-page', component: HelpPageComponent},
  {path: '**', redirectTo: 'dashboard',  pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }