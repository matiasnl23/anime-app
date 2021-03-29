import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStaff } from 'src/app/lib/staff/interfaces/staff.interface';
import { StaffService } from 'src/app/lib/staff/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  id: number;

  staff$?: Observable<IStaff>;

  constructor(private staffService: StaffService, route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getStaff$();
  }

  getStaff$() {
    this.staff$ = this.staffService
      .getStaff(this.id)
      .pipe(map((result) => result.data.Staff));
  }
}
