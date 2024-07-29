import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CategoryProductsComponent } from './website/category-products/category-products.component';
import { CartComponent } from './admin/cart/cart.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { CustomerOrdersComponent } from './website/customer-orders/customer-orders.component';
import { LandingComponent } from './website/landing/landing.component';
import { WebsiteProductsComponent } from './website/website-products/website-products.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'shop',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
      path:'',
      component:LandingComponent,
      children:[
        {
         path:'shop',
         component:WebsiteProductsComponent
        },
        {
          path:'products/:id',
          component:CategoryProductsComponent
        }
      ]
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
    {
      path: '',
      component: LayoutComponent,
     
      children: [
        {
          path: 'products',
          component: ProductsComponent,
          title: 'Products'
        },
        {
          path: 'category',
          component: CategoriesComponent,
          title: 'Category'
        }
      ]
    },
    
    
];
