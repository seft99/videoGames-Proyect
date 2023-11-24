// register-user.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from 'src/assets/services/modal-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login/login.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  blurState = false;
  form! : FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RegisterUserComponent>,
    private modalService: ModalService,
    private fb : FormBuilder,
    private registerService : LoginService
  ) {

    this.form = this.fb.group({
      username:['',Validators.required],
      email: ['', [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.modalService.blurState$.subscribe(blur => {
      this.blurState = blur;
    });
  }
  
  registerUser(){
    if (this.form.valid) {
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      const username = this.form.get('username')?.value;
      this.registerService.registerUser(email, password, username)
        .subscribe(response => {
          console.log('Respuesta del servidor:', response);
          this.dialogRef.close();
        },);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  }

