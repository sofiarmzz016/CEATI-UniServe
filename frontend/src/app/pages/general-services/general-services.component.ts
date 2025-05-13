import { Component } from '@angular/core';
import { LinkCardComponent } from '../../components/link-card/link-card.component';
import { SimpleCardComponent } from '../../components/simple-card/simple-card.component';

@Component({
  selector: 'app-general-services',
  imports: [LinkCardComponent, SimpleCardComponent],
  templateUrl: './general-services.component.html',
})
export class GeneralServicesComponent {}
