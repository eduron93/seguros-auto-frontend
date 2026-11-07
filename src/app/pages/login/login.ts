import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';

  error = '';

  showPassword = false;
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  login(): void {

    this.error = '';

    this.authService.login(
      this.username,
      this.password
    )
      .subscribe({

        next: (response) => {

          console.log('Respuesta login:', response);

          localStorage.setItem(
            'token',
            response.token
          );

          localStorage.setItem(
            'userId',
            response.userId.toString()
          );

          localStorage.setItem(
            'username',
            this.username
          );

          this.router.navigate(['/quotation']);

        },

        error: (err) => {

          console.error(err);

          this.error = 'Usuario o contraseña incorrectos';

        }

      });

  }

}
