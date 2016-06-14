import { Component } from '@angular/core';
import { AlertDemoComponent }   from './components/alert/alert-demo';
import { ButtonsDemoComponent } from './components/buttons/buttons-demo';
import { SectionComponent }     from './components/section/section.component';

@Component({
  selector: 'my-app',
  directives: [ AlertDemoComponent, ButtonsDemoComponent, SectionComponent ],
  templateUrl: 'app/app.component.html'
})

export class AppComponent {}
