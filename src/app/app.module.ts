import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryBgComponent } from './components/entry-bg/entry-bg.component';
import { CLoginComponent } from './components/c-login/c-login.component';
import { CSignupComponent } from './components/c-signup/c-signup.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';
import {ProductPageComponent} from './pages/product-page/product-page.component'
import { ProductTableComponent } from './components/product-table/product-table.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';




@NgModule({
  declarations: [
    AppComponent,
    EntryBgComponent,
    CLoginComponent,
    CSignupComponent,
    SignUpComponent,
    LogInComponent,
    ClientPageComponent,
    SideNavComponent,
    SearchBarComponent,
    ClientTableComponent,
    AddClientPageComponent,
    ProductPageComponent,
    ProductTableComponent,
    AddProductPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
