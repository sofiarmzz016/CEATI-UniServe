import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isLoggedIn = false;
  isBrowser: boolean;

  constructor(
    private router: Router,
    private usersService: UsersService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.checkLoginStatus();
    }
  }

  checkLoginStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  logout(): void {
    if (this.isBrowser) {
      this.usersService.logout();
      this.isLoggedIn = false;
      this.router.navigate(['/iniciar-sesion']);
    }
  }
}
