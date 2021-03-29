import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class UIAlert {
  @Input() align: string = 'left';
  @Input() type: string = 'primary';
}
