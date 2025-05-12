import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './base/navbar/navbar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'UniServe';
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const currentRoute = event.urlAfterRedirects;
        this.showNavbar = currentRoute !== '/iniciar-sesion';
      });
  }
}
