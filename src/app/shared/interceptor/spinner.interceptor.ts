import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize, delay } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerSvc: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const images: HTMLImageElement[] = [];

    if (req.body !== null && typeof req.body === 'object') {
      this.findImagesInRequestBody(req.body, images);
    }

    this.spinnerSvc.waitForImages(images);

    return next.handle(req).pipe(
      delay(200), // Agrega un retraso de 200 milisegundos antes de completar la solicitud
      finalize(() => {
        this.spinnerSvc.hide();
      })
    );
  }

  private findImagesInRequestBody(
    body: any,
    images: HTMLImageElement[]
  ): void {
    Object.values(body).forEach((value: any) => {
      if (value instanceof HTMLImageElement) {
        images.push(value);
      } else if (typeof value === 'object') {
        this.findImagesInRequestBody(value, images);
      }
    });
  }
}
