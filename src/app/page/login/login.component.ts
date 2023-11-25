// login.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { ModalService } from 'src/assets/services/modal-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  form!: FormGroup;
  idUser!: string;
  error: boolean = false;
  constructor(private dialog: MatDialog, private modalService: ModalService, private fb: FormBuilder, private loginService: LoginService, private route: ActivatedRoute, private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  validateLogin() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      this.loginService.authenticateUser(email, password)
        .subscribe({
          next: (response) => {
            localStorage.setItem('storage', JSON.stringify(response));;
            this.idUser = response.id;
            this.navigateToMaingPage()
            this.error = false
          }, error: () => {
            this.error = true
          }
        },
        );
    }
  }

  navigateToMaingPage() {
    this.router.navigate(['/mainPage', this.idUser]);
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
