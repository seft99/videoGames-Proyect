// modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private blurSubject = new BehaviorSubject<boolean>(false);
  blurState$: Observable<boolean> = this.blurSubject.asObservable();

  setBlurState(blur: boolean): void {
    this.blurSubject.next(blur);
  }
}
