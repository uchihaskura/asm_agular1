import { Routes } from '@angular/router';
// import { AdminModule } from './admin/admin-module';
// import { ClientModule } from './client/client-module';
 import { ClientLayout } from './client/layout/client-layout/client-layout';
import { Home } from './client/home/home';
import { Product } from './client/product/product';
import { Contact } from './client/contact/contact';
import { LoginComponent } from './client/login/login';
import { RegisterComponent } from './client/register/register';
import { AdminLayout } from './admin/layout/admin-layout/admin-layout';
import { CategoryCreateComponent } from './admin/category/category';




export const routes: Routes = [
  // {
  //   path: 'client',
  //   loadChildren: () =>
  //     import('./client/client-module').then((m) => m.ClientModule),
  // },
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
   },

  
  {
      path: 'admin',
      component: AdminLayout,
      children: [
        { path: 'category',component:CategoryCreateComponent },
  
   
      ],
    },
  
];

