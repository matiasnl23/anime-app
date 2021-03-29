import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
  id: number;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }
}
