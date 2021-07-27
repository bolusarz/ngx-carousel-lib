import {Injectable} from '@angular/core';
import {Slide} from '../models/slide.model';
import {NgxCarouselLibModule} from '../ngx-carousel-lib.module';

@Injectable({
  providedIn: NgxCarouselLibModule
})
export class CarouselService {
  private slides: Slide[] = [];

  private currentSlideIndex = -1;

  constructor() {
  }

  addSlide(...slides: Slide[]) {
    this.slides.push(...slides);
  }

  removeSlide(slide: number | Slide) {
    if (typeof slide === 'number') {
      this.slides.splice(slide, 1);
    } else {
      this.slides = this.slides.filter((s) => s.src);
    }
  }

  switchSlides(index: number) {
    if (index < this.slides.length) {
      this.currentSlideIndex = index;
      return;
    }
    throw new RangeError(`Index out of bounds. Trying to get index ${index} and array size is ${this.slides.length}`);
  }

  nextSlide() {
    this.currentSlideIndex < this.slides.length - 1 ? ++this.currentSlideIndex : this.currentSlideIndex = 0;
  }

  previousSlide() {
    this.currentSlideIndex > 1 ? --this.currentSlideIndex : this.currentSlideIndex = 0;
  }
}
