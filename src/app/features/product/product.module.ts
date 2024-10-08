import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../../components/product/product.component';
import { FormsModule } from '@angular/forms';
import { FilterProductPipe } from 'src/app/pipe/filter-product.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
