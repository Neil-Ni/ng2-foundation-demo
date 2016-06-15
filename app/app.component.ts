import { Component } from '@angular/core';
import { AlertDemoComponent }       from './components/alert/alert-demo';
import { ButtonsDemoComponent }     from './components/buttons/buttons-demo';
import { PaginationDemoComponent }  from './components/pagination/pagination-demo';
import { ProgressbarDemoComponent } from './components/progressbar/progressbar-demo';
import { RatingDemoComponent }      from './components/rating/rating-demo';
import { TabsDemoComponent }        from './components/tabs/tabs-demo';
import { SectionComponent }         from './components/section/section.component';

@Component({
  selector: 'my-app',
  directives: [
    AlertDemoComponent,
    ButtonsDemoComponent,
    PaginationDemoComponent,
    ProgressbarDemoComponent,
    RatingDemoComponent,
    TabsDemoComponent,
    SectionComponent
  ],
  templateUrl: 'app/app.component.html'
})

export class AppComponent {}
