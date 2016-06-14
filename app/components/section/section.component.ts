import { Component, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'demo-section',
  directives: [ CORE_DIRECTIVES ],
  templateUrl: 'app/components/section/section.html'
})

export class SectionComponent {
  @Input() public name:string;
  @Input() public link:string;
}
