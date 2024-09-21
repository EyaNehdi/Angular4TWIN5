import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AproposRoutingModule } from './apropos-routing.module';
import { AproposComponent } from '../../components/apropos/apropos.component';


@NgModule({
  declarations: [
    AproposComponent
  ],
  imports: [
    CommonModule,
    AproposRoutingModule
  ]
})
export class AproposModule { }
