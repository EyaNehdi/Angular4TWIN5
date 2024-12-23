import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { CategoryComponent } from './components/category/category.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CardComponentComponent } from './components/card-component/card-component.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    HeaderComponent,
    FilterPipe,
    HighlightDirective,
    NotFoundComponent,
    FormCategoryComponent,
    CategoryComponent,
    CardComponentComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
