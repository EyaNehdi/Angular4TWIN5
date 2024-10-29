import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category/add', component: FormCategoryComponent },
  { path: 'category/update/:objet', component: FormCategoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/product/product.module')
        .then((m) => m.ProductModule),
  },
  {
    path: 'apropos',
    loadChildren: () =>
      import('./features/apropos/apropos.module')
        .then((m) => m.AproposModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module')
        .then((m) => m.ContactModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module')
        .then((m) => m.ProfileModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
