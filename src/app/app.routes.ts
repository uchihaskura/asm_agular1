import { Routes } from '@angular/router';
import { ClientLayout } from './client/layout/client-layout/client-layout';
import { Home } from './client/home/home';
import { Product } from './client/product/product';
import { Contact } from './client/contact/contact';
import { LoginComponent } from './client/login/login';
import { RegisterComponent } from './client/register/register';
import { AdminLayout } from './admin/layout/admin-layout/admin-layout';
import { CategoryCreateComponent } from './admin/category/category';
import { ProductCreate } from './admin/product-create/product-create';
import { BrandCreate } from './admin/brand/brand';
import { UserList } from './admin/user/user';
import { UserAddComponent } from './admin/user-create/user-create'; 
import { ProductListComponent } from './admin/product-list/product-list';
import { BrandList } from './admin/brand-list/brand-list';
import { CategoryList } from './admin/category-list/category-list';
import { ProductUpdate } from './admin/product-update/product-update';




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
        { path: 'category-list', component: CategoryList },
        { path: 'product-create',component:ProductCreate },
        { path :'product-list', component: ProductListComponent },
        { path: 'brand',component:BrandCreate },
        { path: 'brand-list',component:BrandList },
        { path: 'user',component:UserList },
        { path: 'user-create', component: UserAddComponent },
        { path: 'products/update/:id',component: ProductUpdate,},
       

  
   
      ],
    },
  
];

