import { Component, input } from '@angular/core';

@Component({
  selector: 'app-time-button',
  imports: [],
  templateUrl: './time-button.component.html',
})
export class TimeButtonComponent {
  text = input('');
}
