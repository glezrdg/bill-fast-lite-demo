import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/session-module/sign-up/sign-up.component';
import { LogInComponent } from './pages/session-module/log-in/log-in.component';
import { ClientPageComponent } from './pages/main-module/client-page/client-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {ProductPageComponent} from './pages/main-module/product-page/product-page.component';
import { ConsultBillPageComponent } from './pages/main-module/consult-bill-page/consult-bill-page.component';
import { SettingPageComponent } from './pages/setting-module/setting-page/setting-page.component';
import { addclientService } from './services/addClientService.service';
import { DashBoardComponent } from './pages/main-module/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ImgComponent } from './components/img/img.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { ForgotpasswordComponent } from './pages/session-module/forgotpassword/forgotpassword.component';
import { SideNavSettingsComponent } from './components/side-nav-settings/side-nav-settings.component';
import { PasswordPageComponent } from './pages/setting-module/password-page/password-page.component';
import { NotificationsPageComponent } from './pages/setting-module/notifications-page/notifications-page.component';
import { HelpPageComponent } from './pages/setting-module/help-page/help-page.component';
import { MoreOptComponent } from './components/more-opt/more-opt.component';
import { BillPageComponent } from './pages/main-module/bill-page/bill-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    ClientPageComponent,
    SideNavComponent,
    SearchBarComponent,
    ProductPageComponent,
    ConsultBillPageComponent,
    BillPageComponent,
    SettingPageComponent,
    DashBoardComponent,
    ProductsComponent,
    ProductComponent,
    ImgComponent,
    UserIconComponent,
    ForgotpasswordComponent,
    SideNavSettingsComponent,
    PasswordPageComponent,
    NotificationsPageComponent,
    HelpPageComponent,
    MoreOptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [addclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
