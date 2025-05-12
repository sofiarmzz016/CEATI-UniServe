import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sport-card',
  imports: [],
  templateUrl: './sport-card.component.html',
})
export class SportCardComponent {
  icon = input('');
  title = input('');
  text = input('');
  email = input('');
  phone = input('');
  responsible = input('');
  place = input('');
}
