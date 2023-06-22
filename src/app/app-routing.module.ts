import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlacementComponent} from "./components/placement/placement.component";
import {ProductsComponent} from "./components/products/products.component";
import {PricelistComponent} from "./components/pricelist/pricelist.component";
import {ImpressumComponent} from "./footer/impressum/impressum.component";
import {ContactComponent} from "./footer/contact/contact.component";
import {FooterComponent} from "./footer/footer.component";
import {MainpageComponent} from "./components/mainpage/mainpage.component";
import {PlacementOneComponent} from "./components/placement/placement-one/placement-one.component";
import {PlacementTwoComponent} from "./components/placement/placement-two/placement-two.component";
import {PlacementThreeComponent} from "./components/placement/placement-three/placement-three.component";
import {ProductOneComponent} from "./components/products/product-one/product-one.component";
import {ProductTwoComponent} from "./components/products/product-two/product-two.component";
import {CareerComponent} from "./components/career/career.component";
import {AppointmentComponent} from "./components/appointment/appointment.component";

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'placement', component: PlacementComponent},
  {path: 'placement/p1', component: PlacementOneComponent},
  {path: 'placement/p2', component: PlacementTwoComponent},
  {path: 'placement/p3', component: PlacementThreeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/hair', component: ProductOneComponent},
  {path: 'products/feet', component: ProductTwoComponent},
  {path: 'pricelist', component: PricelistComponent},
  {path: 'career', component: CareerComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
