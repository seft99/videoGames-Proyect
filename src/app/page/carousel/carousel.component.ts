import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() indicador = true;
  images: any;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 7000;
  selectedIndex = 0;

  constructor(private service: ApiService) {}
  ngOnInit() {
    this.getdata();
    if (this.autoSlide) {
      this.autoSlideImg();
    }
  }

  autoSlideImg() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImg(index: number) {
    this.selectedIndex = index;
  }

  getdata() {
    this.service.getDataCarousel().subscribe((data) => {
      this.images = data;
    });
  }

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
