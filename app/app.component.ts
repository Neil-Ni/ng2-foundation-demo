import { Component }                   from '@angular/core';
import { AccordionDemoComponent }      from './components/accordion/accordion-demo';
import { AlertDemoComponent }          from './components/alert/alert-demo';
import { ButtonsDemoComponent }        from './components/buttons/buttons-demo';
import { DropdownMenuDemoComponent }   from './components/dropdown-menu/dropdown-menu-demo';
import { DropdownToggleDemoComponent } from './components/dropdown-toggle/dropdown-toggle-demo';
import { PaginationDemoComponent }     from './components/pagination/pagination-demo';
import { ProgressbarDemoComponent }    from './components/progressbar/progressbar-demo';
import { RatingDemoComponent }         from './components/rating/rating-demo';
import { TabsDemoComponent }           from './components/tabs/tabs-demo';
import { TooltipDemoComponent }        from './components/tooltip/tooltip-demo';
import { SectionComponent }            from './components/section/section.component';

@Component({
  selector: 'my-app',
  directives: [
    AccordionDemoComponent,
    AlertDemoComponent,
    ButtonsDemoComponent,
    DropdownMenuDemoComponent,
    DropdownToggleDemoComponent,
    PaginationDemoComponent,
    ProgressbarDemoComponent,
    RatingDemoComponent,
    TabsDemoComponent,
    TooltipDemoComponent,
    SectionComponent
  ],
  templateUrl: 'app/app.component.html'
})

export class AppComponent {}
