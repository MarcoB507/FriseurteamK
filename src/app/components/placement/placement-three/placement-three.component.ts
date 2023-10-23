import { Component } from '@angular/core';

@Component({
  selector: 'app-placement-three',
  templateUrl: './placement-three.component.html',
  styleUrls: ['./placement-three.component.css']
})
export class PlacementThreeComponent {
  slides = [
    { caption: null, display: 'none' },
    { caption: null, display: 'none' },
    { caption: null, display: 'none' },
    { caption: null, display: 'none' }
  ];
  currentIndex = 0;

  constructor() { }

  ngOnInit() {
    this.showSlide(this.currentIndex);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentIndex);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number) {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].display = i === index ? 'block' : 'none';
    }
  }
}
