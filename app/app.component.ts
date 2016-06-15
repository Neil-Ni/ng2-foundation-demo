import { Component } from '@angular/core';
import { AlertDemoComponent }       from './components/alert/alert-demo';
import { ButtonsDemoComponent }     from './components/buttons/buttons-demo';
import { PaginationDemoComponent }  from './components/pagination/pagination-demo';
import { ProgressbarDemoComponent } from './components/progressbar/progressbar-demo';
import { SectionComponent }         from './components/section/section.component';

@Component({
  selector: 'my-app',
  directives: [
    AlertDemoComponent,
    ButtonsDemoComponent,
    SectionComponent,
    PaginationDemoComponent,
    ProgressbarDemoComponent
  ],
  templateUrl: 'app/app.component.html'
})

export class AppComponent {}
