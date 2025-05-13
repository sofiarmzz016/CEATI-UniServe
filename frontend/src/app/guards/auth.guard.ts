import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  canActivate(): boolean {
    const isBrowser = isPlatformBrowser(this.platformId);

    if (isBrowser) {
      const token = localStorage.getItem('token');
      if (token) {
        return true;
      }
    }

    this.router.navigate(['/iniciar-sesion']);
    return false;
  }
}
