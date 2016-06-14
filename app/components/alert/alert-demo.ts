import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { AlertComponent } from 'ng2-foundation/ng2-foundation';

@Component({
  selector: 'alert-demo',
  templateUrl: 'app/components/alert/alert-demo.html',
  directives: [ AlertComponent, CORE_DIRECTIVES ]
})

export class AlertDemoComponent {
  public alerts: Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.'
    }
  ];

  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }

  public addAlert(): void {
    this.alerts.push({type: 'alert', msg: 'Another alert!'});
  }
}
