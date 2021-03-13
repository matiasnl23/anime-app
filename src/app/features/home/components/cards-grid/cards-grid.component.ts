import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss'],
})
export class CardsGridComponent implements OnInit {
  @Input()
  items?: Observable<any>;

  @Input()
  title = 'Title here';

  constructor() {}

  ngOnInit(): void {}
}
