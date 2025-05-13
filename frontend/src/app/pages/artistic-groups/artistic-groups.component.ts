import { Component, input } from '@angular/core';
import { SportCardComponent } from '../../components/sport-card/sport-card.component';

@Component({
  selector: 'app-artistic-groups',
  imports: [SportCardComponent],
  templateUrl: './artistic-groups.component.html',
})
export class ArtisticGroupsComponent {
  icon = input('');
  title = input('');
  text = input('');
  email = input('');
  phone = input('');
  responsible = input('');
  place = input('');
}
