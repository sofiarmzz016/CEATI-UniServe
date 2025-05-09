import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-my-appointments',
  imports: [TableComponent],
  templateUrl: './my-appointments.component.html',
})
export class MyAppointmentsComponent {}
