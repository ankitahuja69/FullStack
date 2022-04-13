import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProducthomeComponent } from './producthome/producthome.component';


@NgModule({
  declarations: [
    ProductdetailsComponent,
    ProducthomeComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
