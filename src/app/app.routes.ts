import { Routes } from '@angular/router';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ScheduleAppointmentComponent } from './pages/schedule-appointment/schedule-appointment.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { GeneralServicesComponent } from './pages/general-services/general-services.component';
import { InternshipsComponent } from './pages/internships/internships.component';
import { SocialServiceComponent } from './pages/social-service/social-service.component';
import { SportTeamsComponent } from './pages/sport-teams/sport-teams.component';
import { ArtisticGroupsComponent } from './pages/artistic-groups/artistic-groups.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'servicios-generales',
    component: GeneralServicesComponent,
    children: [
      {
        path: 'practicas-profesionales',
        component: InternshipsComponent,
      },
      {
        path: 'servicio-social',
        component: SocialServiceComponent,
      },
    ],
  },
  { path: 'equipos-deportivos', component: SportTeamsComponent },
  { path: 'grupos-artisticos', component: ArtisticGroupsComponent },
  { path: 'citas', component: AppointmentsComponent },
  { path: 'agendar-citas', component: ScheduleAppointmentComponent },
  { path: 'mis-citas', component: MyAppointmentsComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
];
