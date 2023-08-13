import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent {


  // ngOnInit() {
  //   // Beim Initialisieren der Komponente "London" als aktiven Tab aktivieren
  //   this.openCity('Herzzentrum');
  // }
  //
  // openCity(cityName: string): void {
  //   const tabcontent = document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>;
  //   for (let i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = 'none';
  //   }
  //
  //   const tablinks = document.getElementsByClassName('tablinks');
  //   for (let i = 0; i < tablinks.length; i++) {
  //     tablinks[i].classList.remove('active');
  //   }
  //
  //   const cityElement = document.getElementById(cityName);
  //   if (cityElement) {
  //     cityElement.style.display = 'block';
  //   }
  // }
}
