import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private loadingCount = 0;
  isLoading$ = new Subject<boolean>();

  show(): void {
    if (this.loadingCount === 0) {
      this.isLoading$.next(true);
    }
    this.loadingCount++;
  }

  hide(): void {
    this.loadingCount--;
    if (this.loadingCount === 0) {
      this.isLoading$.next(false);
    }
  }

  waitForImages(images: HTMLImageElement[]): void {
    this.show();
    let loadedCount = 0;

    const checkIfAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        this.hide();
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        checkIfAllImagesLoaded();
      } else {
        image.onload = checkIfAllImagesLoaded;
        image.onerror = checkIfAllImagesLoaded;
      }
    });
  }
}
