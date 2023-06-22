import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  dropdownVisible = false;
  dropdownproductsVisible = false;

  ngOnInit() {
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  toggleDropdownproducts() {
    this.dropdownproductsVisible = !this.dropdownproductsVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = document.getElementById('mydropdown');
    const dropdownButton = document.querySelector('.dropdown .dropbtn');

    // @ts-ignore
    if (dropdown && !dropdown.contains(target) && !dropdownButton.contains(target)) {
      this.dropdownVisible = false;
    }
  }
}
