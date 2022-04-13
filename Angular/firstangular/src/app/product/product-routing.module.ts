import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProducthomeComponent } from './producthome/producthome.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import produce from 'immer';
const routes: Routes = [

  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component:ProductComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ProductdetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class ProductRoutingModule { }
