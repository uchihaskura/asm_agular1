import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register'; 
import { ClientLayout } from './layout/client-layout/client-layout';






const routes: Routes = [ 
 {
  path: '',
  component: ClientLayout,  
  children: [
    {
    path: '',
    component: Home,
    },
    {
      path: 'product',
      component: Product,
    },
    {
      path: 'contact',
      component: Contact,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
  ],
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
