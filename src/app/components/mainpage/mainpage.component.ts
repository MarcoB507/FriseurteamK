import {Component, OnInit, ViewChild} from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // images = [
  //   '/src/pictures/911.jpg',
  //   '/src/pictures/Elbufer1.JPG',
  //   '/src/pictures/Elbufer2.JPG',
  // ];
  //
  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;
  // pauseOnFocus = true;
  //
  // @ViewChild('carousel', { static: true }) carousel?: NgbCarousel;
  //
  // ngAfterViewInit() {
  //   if (this.carousel) {
  //     this.carousel.showNavigationArrows = true;
  //     this.carousel.showNavigationIndicators = true;
  //   }
  // }
  //
  // togglePaused() {
  //   if (this.carousel) {
  //     if (this.paused) {
  //       this.carousel.cycle();
  //     } else {
  //       this.carousel.pause();
  //     }
  //     this.paused = !this.paused;
  //   }
  // }
  //
  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (
  //     this.carousel &&
  //     this.unpauseOnArrow &&
  //     slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
  //   ) {
  //     this.togglePaused();
  //   }
  //   if (this.carousel && this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }


  //
  // slides = [
  //   {caption: null, display: 'none'},
  //   {caption: null, display: 'none'},
  //   {caption: null, display: 'none'},
  //   {caption: null, display: 'none'}
  // ];
  // currentIndex = 0;
  //
  // constructor() { }
  //
  // ngOnInit() {
  //   this.showSlide(this.currentIndex);
  // }
  //
  // prevSlide() {
  //   this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  //   this.showSlide(this.currentIndex);
  // }
  //
  // nextSlide() {
  //   this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  //   this.showSlide(this.currentIndex);
  // }
  //
  // showSlide(index: number) {
  //   for (let i = 0; i < this.slides.length; i++) {
  //     this.slides[i].display = i === index ? 'block' : 'none';
  //   }
  // }

  slides = [
    { caption: null, display: 'none' },
    { caption: null, display: 'none' },
    { caption: null, display: 'none' },
    { caption: null, display: 'none' }
  ];
  currentIndex = 0;
  autoplayInterval: any;

  ngOnInit() {
    this.showSlide(this.currentIndex);
    this.startAutoplay();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentIndex);
    this.restartAutoplay();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(this.currentIndex);
    this.restartAutoplay();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.showSlide(this.currentIndex);
    this.restartAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  restartAutoplay() {
    clearInterval(this.autoplayInterval);
    this.startAutoplay();
  }

  showSlide(index: number) {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].display = i === index ? 'block' : 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
