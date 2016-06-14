import { Component } from '@angular/core';
import { ButtonsSectionComponent } from './components/buttons-section';

@Component({
  selector: 'my-app',
  directives: [ButtonsSectionComponent],
  templateUrl: 'app/app.component.html'
})
export class AppComponent {}
