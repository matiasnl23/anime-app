import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStaff, StaffService } from '@lib/staff';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  id: number;

  staff$?: Observable<IStaff>;

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService
  ) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getStaff$();
  }

  getRoutes() {
    return this.route.routeConfig?.children?.filter((r) => r.path !== '**');
  }

  getStaff$() {
    this.staff$ = this.staffService
      .getStaff(this.id)
      .pipe(map((result) => result.data.Staff));
  }
}
