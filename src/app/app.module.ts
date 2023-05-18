import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PlacementComponent} from './components/placement/placement.component';
import {ProductsComponent} from './components/products/products.component';
import {PricelistComponent} from './components/pricelist/pricelist.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {ContactComponent} from "./contact/contact.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacementComponent,
    ProductsComponent,
    PricelistComponent,
    ImpressumComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
