import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from '../../components/profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
