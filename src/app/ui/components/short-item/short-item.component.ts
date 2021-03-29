import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-short-item',
  templateUrl: './short-item.component.html',
  styleUrls: ['./short-item.component.scss'],
})
export class UIShortItemComponent {
  @Input() id!: number;
  @Input() leftImage?: string;
  @Input() leftTitle?: string;
  @Input() leftSecondary?: string;
  @Input() rightImage?: string;
  @Input() rightTitle?: string;
  @Input() rightSecondary?: string;
  @Output() elementClick = new EventEmitter<{ element: string; id: number }>();

  onClick(element: string): void {
    this.elementClick.emit({ element, id: this.id });
  }
}
