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
import { AuthGuard } from './guards/auth.guard';
import { AcademicExchangeComponent } from './pages/academic-exchange/academic-exchange.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios-generales', component: GeneralServicesComponent },
  { path: 'practicas-profesionales', component: InternshipsComponent },
  { path: 'servicio-social', component: SocialServiceComponent },
  { path: 'movilidad-academica', component: AcademicExchangeComponent },
  { path: 'equipos-deportivos', component: SportTeamsComponent },
  { path: 'grupos-artisticos', component: ArtisticGroupsComponent },
  { path: 'citas', component: AppointmentsComponent },
  {
    path: 'agendar-citas',
    component: ScheduleAppointmentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mis-citas',
    component: MyAppointmentsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'iniciar-sesion', component: LoginComponent },
];
