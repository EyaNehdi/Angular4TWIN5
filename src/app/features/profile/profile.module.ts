import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from '../../components/profile/profile.component';
import { MainUserComponent } from '../../components/main-user/main-user.component';
import { FormUserComponent } from '../../components/form-user/form-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    MainUserComponent,
    FormUserComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
