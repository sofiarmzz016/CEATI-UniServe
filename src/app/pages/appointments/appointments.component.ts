import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointments',
  imports: [CardComponent, RouterLink],
  templateUrl: './appointments.component.html',
})
export class AppointmentsComponent {}
