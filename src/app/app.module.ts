import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { ClientTableComponent } from './components/client-table/client-table.component';
import {ProductPageComponent} from './pages/product-page/product-page.component'
import { BillPageComponent } from './pages/bill-page/bill-page.component';
import { ConsultBillPageComponent } from './pages/consult-bill-page/consult-bill-page.component';
import { BillTableComponent } from './components/bill-table/bill-table.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { MoreOptPageComponent } from './pages/more-opt-page/more-opt-page.component';
import { addclientService } from './services/addClientService.service';
import { DashBoardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ImgComponent } from './components/img/img.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    ClientPageComponent,
    SideNavComponent,
    SearchBarComponent,
    ClientTableComponent,
    ProductPageComponent,
    BillPageComponent,
    ConsultBillPageComponent,
    BillTableComponent,
    SettingPageComponent,
    MoreOptPageComponent,
    DashBoardComponent,
    ProductsComponent,
    ProductComponent,
    ImgComponent,
    UserIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [addclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
