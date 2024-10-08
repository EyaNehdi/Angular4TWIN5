import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductModule } from './features/product/product.module';
import { AproposModule } from './features/apropos/apropos.module';
import { ContactModule } from './features/contact/contact.module';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:'/home', pathMatch:'full'},
  //Lazy loading "chunks"
  {path:'products',loadChildren:()=>import('./features/product/product.module').then((m)=>m.ProductModule)},
  {path:'apropos',loadChildren:()=>import('./features/apropos/apropos.module').then((m)=>m.AproposModule)},
  {path:'contact',loadChildren:()=>import('./features/contact/contact.module').then((m)=>m.ContactModule)},
  {path:'profile',loadChildren:()=>import('./features/profile/profile.module').then((m)=>m.ProfileModule)},

  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
