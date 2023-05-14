import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlacementComponent } from './placement/placement.component';
import { ProductsComponent } from './products/products.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacementComponent,
    ProductsComponent,
    PricelistComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
