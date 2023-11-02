import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PlacementComponent} from './components/placement/placement.component';
import {ProductsComponent} from './components/products/products.component';
import {PricelistComponent} from './components/pricelist/pricelist.component';
import {ImpressumComponent} from './footer/impressum/impressum.component';
import {ContactComponent} from "./footer/contact/contact.component";
import {AppRoutingModule} from "./app-routing.module";
import {FooterComponent} from './footer/footer.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {PlacementOneComponent} from './components/placement/placement-one/placement-one.component';
import {PlacementTwoComponent} from './components/placement/placement-two/placement-two.component';
import {PlacementThreeComponent} from './components/placement/placement-three/placement-three.component';
import {ProductOneComponent} from './components/products/product-one/product-one.component';
import {ProductTwoComponent} from './components/products/product-two/product-two.component';
import {CareerComponent} from './components/career/career.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { CarouselModule } from 'primeng/carousel';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {GalleriaModule} from "primeng/galleria";
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacementComponent,
    ProductsComponent,
    PricelistComponent,
    ImpressumComponent,
    ContactComponent,
    FooterComponent,
    MainpageComponent,
    PlacementOneComponent,
    PlacementTwoComponent,
    PlacementThreeComponent,
    ProductOneComponent,
    ProductTwoComponent,
    CareerComponent,
    AppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    CarouselModule,
    CdkAccordionModule,
    GalleriaModule,
    NgbCarousel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
