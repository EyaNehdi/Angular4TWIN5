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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
