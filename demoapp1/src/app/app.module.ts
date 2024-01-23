import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HighlightDirective } from './highlight.directive';
import { RegisterationComponent } from './registeration/registeration.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
// import { FormComponent } from './form/form.component';
// import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
    HighlightDirective,
    RegisterationComponent,
    ProductdetailsComponent,
    ErrorPageComponent,
    ProductsComponent,
    AddproductComponent,
    ProductdetailComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
