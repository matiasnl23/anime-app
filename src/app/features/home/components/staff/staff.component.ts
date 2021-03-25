import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaService } from 'src/app/lib/media/services/media.service';
import { IStaffEdge } from 'src/app/lib/staff/interfaces/staff.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  id: number;

  staff$?: Observable<IStaffEdge[]>;

  constructor(private mediaService: MediaService, route: ActivatedRoute) {
    this.id = route.parent?.snapshot.params?.id;
  }

  ngOnInit(): void {
    this.staff();
  }

  staff(): void {
    this.staff$ = this.mediaService
      .getStaff(this.id)
      .pipe(map((response) => response.data.Media.staff?.edges || []));
  }
}
