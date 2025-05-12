import { Component, input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  imports: [],
  templateUrl: './link-card.component.html',
})
export class LinkCardComponent {
  text = input('');
  title = input('');
  imgURL = input('');
}
