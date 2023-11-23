// login.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { ModalService } from 'src/assets/services/modal-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form! : FormGroup
  constructor(private dialog: MatDialog, private modalService: ModalService, private fb : FormBuilder) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  openModalRegister(): void {
    this.modalService.setBlurState(true); // Activa el desenfoque
    const dialogRef = this.dialog.open(RegisterUserComponent, {
      data: { nam: '', email: '', password: '' },
    });

    dialogRef.afterClosed().subscribe(() => {
      const firstInput = document.getElementById('firstInput') as HTMLInputElement;
      this.modalService.setBlurState(false); // Desactiva el desenfoque al cerrar la modal
    });
  }
}
