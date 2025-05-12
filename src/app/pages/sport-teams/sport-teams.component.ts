import { Component } from '@angular/core';
import { SportCardComponent } from '../../components/sport-card/sport-card.component';

@Component({
  selector: 'app-sport-teams',
  imports: [SportCardComponent],
  templateUrl: './sport-teams.component.html',
})
export class SportTeamsComponent {}
