import { Routes } from '@angular/router';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ScheduleAppointmentComponent } from './pages/schedule-appointment/schedule-appointment.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';

export const routes: Routes = [
  { path: 'citas', component: AppointmentsComponent },
  { path: 'agendar-citas', component: ScheduleAppointmentComponent },
  { path: 'mis-citas', component: MyAppointmentsComponent },
];
