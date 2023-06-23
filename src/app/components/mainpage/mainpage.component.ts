import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  myIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.carousel();
  }

  carousel() {
    const x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    this.myIndex++;
    if (this.myIndex > x.length) {
      this.myIndex = 1;
    }
    x[this.myIndex - 1].style.display = "block";
    setTimeout(() => this.carousel(), 5000);
  }
}
