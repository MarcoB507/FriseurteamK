import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlacementComponent} from "./components/placement/placement.component";
import {ProductsComponent} from "./components/products/products.component";
import {PricelistComponent} from "./components/pricelist/pricelist.component";
import {ImpressumComponent} from "./impressum/impressum.component";

const routes: Routes = [
  {path: 'placement', component: PlacementComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'pricelist', component: PricelistComponent},
  {path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
