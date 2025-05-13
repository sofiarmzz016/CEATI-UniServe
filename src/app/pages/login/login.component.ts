import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  isLoginMode = true;
  email = '';
  fullName = '';
  password = '';
  errorMessage = '';

  constructor(private usersService: UsersService, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }

  onSubmit() {
    const credentials: any = {
      email: this.email,
      password: this.password,
    };

    if (!this.isLoginMode) {
      credentials.full_name = this.fullName;
    }

    if (this.isLoginMode) {
      this.usersService.login(credentials).subscribe({
        next: () => this.router.navigate(['/citas']),
        error: (err: Error & { error: { message: string } }) => {
          this.errorMessage = err.error.message || 'Error al iniciar sesión.';
        },
      });
    } else {
      this.usersService.register(credentials).subscribe({
        next: () => {
          this.isLoginMode = true;
          this.fullName = ''; // Limpia el campo al cambiar de modo
        },
        error: (err: Error & { error: { message: string } }) => {
          this.errorMessage = err.error.message || 'Error al registrarse.';
        },
      });
    }
  }
}
