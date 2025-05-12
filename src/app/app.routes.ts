import { Routes } from '@angular/router';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ScheduleAppointmentComponent } from './pages/schedule-appointment/schedule-appointment.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { GeneralServicesComponent } from './pages/general-services/general-services.component';

export const routes: Routes = [
  { path: 'servicios-generales', component: GeneralServicesComponent },
  { path: 'citas', component: AppointmentsComponent },
  { path: 'agendar-citas', component: ScheduleAppointmentComponent },
  { path: 'mis-citas', component: MyAppointmentsComponent },
];
