import { Component } from '@angular/core';

@Component({
  selector: 'components/app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PricelistComponent {

  // items = ['Damen', 'Herren', 'Kinder bis 14 Jahren', 'Produkte'];
  // expandedIndex = 0;


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });



  }
}
