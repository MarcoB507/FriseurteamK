import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit{
  slides = [
    { caption: 'Caption 1', display: 'none' },
    { caption: 'Caption 2', display: 'none' },
    { caption: 'Caption 3', display: 'none' },
    { caption: 'Caption 4', display: 'none' }
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
