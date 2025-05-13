import { Component, input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  imports: [],
  templateUrl: './simple-card.component.html',
})
export class SimpleCardComponent {
  title = input('');
  text = input('');
  place = input('');
  number = input('');
}
