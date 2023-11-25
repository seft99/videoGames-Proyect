import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  dataUserLocalStorage: any
  constructor(private logOutService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataUserLocalStorage = localStorage.getItem('storage')
    if (this.dataUserLocalStorage) {
      this.dataUserLocalStorage = JSON.parse(this.dataUserLocalStorage)
    }
  }

}
