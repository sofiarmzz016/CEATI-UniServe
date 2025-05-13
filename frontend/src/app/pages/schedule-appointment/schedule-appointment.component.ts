import { Component } from '@angular/core';
import { TimeButtonComponent } from '../../components/time-button/time-button.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentsService } from '../../services/appointments.service';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule-appointment',
  imports: [
    CommonModule,
    TimeButtonComponent,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    RouterLink,
  ],
  templateUrl: './schedule-appointment.component.html',
})
export class ScheduleAppointmentComponent {
  selectedTime: string = '';
  selectedDate: Date | null = null;

  allTimeSlots: string[] = [];
  availableTimeSlots: string[] = [];

  appointmentType = 'Psicologia';
  description = '';

  userId = '';

  constructor(
    private appointmentsService: AppointmentsService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usersService.getProfile().subscribe({
      next: (userProfile) => {
        this.userId = userProfile.id;
      },
    });
  }

  selectDate() {
    this.selectedTime = '';
    this.fetchAvailableHours();
  }

  selectHour(time: string) {
    this.selectedTime = time;
    console.log('SELECTED HOUR: ', this.selectedTime);
  }

  fetchAvailableHours() {
    if (!this.selectedDate) return;

    const formattedDate = this.selectedDate.toISOString().split('T')[0];

    this.appointmentsService
      .getAvailableAppointments(formattedDate, this.appointmentType)
      .subscribe((occupied) => {
        const allSlots = this.generateTimeSlots();
        this.availableTimeSlots = allSlots.filter(
          (time) => !occupied.occupied_times.includes(time)
        );
      });
  }

  generateTimeSlots(): string[] {
    const slots: string[] = [];
    let hour = 7;
    let minutes = 0;

    while (hour < 17 || (hour === 17 && minutes === 0)) {
      const time = `${hour.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;
      slots.push(time);

      minutes += 50;
      if (minutes >= 60) {
        hour++;
        minutes -= 60;
      }
    }

    return slots;
  }

  submitAppointment() {
    if (!this.selectedDate || !this.selectedTime) return;

    const date = this.selectedDate.toISOString().split('T')[0];

    const payload = {
      type: this.appointmentType,
      description: this.description,
      date,
      time: this.selectedTime,
      user_id: this.userId,
    };

    console.log('Payload for creation: ', payload);

    this.appointmentsService.agendarCita(payload).subscribe({
      next: (response) => {
        console.log('Cita agendada exitosamente:', response);
        this.router.navigate(['/mis-citas']);
      },
      error: (error) => {
        console.error('Error al agendar cita:', error);
      },
    });
  }
}
