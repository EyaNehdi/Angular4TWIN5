import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../../components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductPipe } from 'src/app/pipe/filter-product.pipe';
import { FormProductComponent } from '../../components/form-product/form-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    FilterProductPipe,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
