import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { AppointmentsService } from '../../services/appointments.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './my-appointments.component.html',
  styles: [
    `
      table {
        width: 100%;
        margin-top: 20px;
      }

      th.mat-header-cell {
        font-weight: bold;
      }

      td.mat-cell,
      th.mat-header-cell {
        padding: 12px;
      }
    `,
  ],
})
export class MyAppointmentsComponent {
  displayedColumns: string[] = ['type', 'date', 'time', 'action'];
  appointments: any[] = [];
  userId: number | null = null;

  constructor(
    private appointmentsService: AppointmentsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getProfile().subscribe({
      next: (userProfile) => {
        this.userId = userProfile.id;
        if (this.userId) this.loadAppointments(this.userId);
      },
    });
  }

  loadAppointments(userId: number) {
    this.appointmentsService.getUserAppointments(userId).subscribe({
      next: (data) => {
        this.appointments = data;
      },
    });
  }

  deleteAppointment(appointmentId: number): void {
    if (!confirm('¿Estás seguro de que deseas eliminar esta cita?')) return;

    this.appointmentsService.deleteAppointment(appointmentId).subscribe({
      next: () => {
        // Elimina la cita del array local después de borrarla
        this.appointments = this.appointments.filter(
          (a) => a.id !== appointmentId
        );
      },
      error: (error) => {
        console.error('Error al eliminar la cita', error);
      },
    });
  }
}
