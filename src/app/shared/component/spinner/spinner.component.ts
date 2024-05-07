import { Component, Inject } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],

})
export class SpinnerComponent {
isLoading$ = this.spinnerSvc.isLoading$;
  constructor(private spinnerSvc: SpinnerService){}



}
