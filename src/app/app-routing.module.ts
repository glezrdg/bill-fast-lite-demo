import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';


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

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }