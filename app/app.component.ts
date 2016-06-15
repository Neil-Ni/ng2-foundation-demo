import { Component } from '@angular/core';
import { AlertDemoComponent }      from './components/alert/alert-demo';
import { ButtonsDemoComponent }    from './components/buttons/buttons-demo';
import { PaginationDemoComponent } from './components/pagination/pagination-demo';
import { SectionComponent }        from './components/section/section.component';

@Component({
  selector: 'my-app',
  directives: [
    AlertDemoComponent, ButtonsDemoComponent, SectionComponent, PaginationDemoComponent
  ],
  templateUrl: 'app/app.component.html'
})

export class AppComponent {}
