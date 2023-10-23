import { Component } from '@angular/core';

@Component({
  selector: 'app-placement-two',
  templateUrl: './placement-two.component.html',
  styleUrls: ['./placement-two.component.css']
})
export class PlacementTwoComponent {
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
