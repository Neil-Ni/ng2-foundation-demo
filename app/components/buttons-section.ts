import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {ButtonsDemoComponent} from './buttons/buttons-demo';

@Component({
  selector: 'buttons-section',
  directives: [ButtonsDemoComponent, CORE_DIRECTIVES],
  templateUrl: '/app/components/buttons-section.html'
})
export class ButtonsSectionComponent {
  public name:string = 'Buttons';
}
