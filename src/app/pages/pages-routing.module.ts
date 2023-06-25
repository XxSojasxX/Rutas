import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from 'src/app/pages/pages.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';


const routes: Routes = [
  // rutas protegidas
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'product', component: ProductsComponent},
      { path: 'category', component: CategoriesComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      //    {path: '**', component:NoPagesFoundComponent},
    ]},

];

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
