import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { MediaService } from 'src/app/lib/media/services/media.service';
import { ScrollService } from 'src/app/lib/scroll/services/scroll.service';
import {
  IStaff,
  IStaffEdge,
} from 'src/app/lib/staff/interfaces/staff.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit, OnDestroy {
  id: number;

  currentPage = 1;

  hasNextPage = false;

  loading = false;

  staff: IStaffEdge[] = [];

  subscriptions = new Subscription();

  constructor(
    private mediaService: MediaService,
    private scrollService: ScrollService,
    route: ActivatedRoute
  ) {
    this.id = route.parent?.snapshot.params?.id;
  }

  ngOnInit(): void {
    this.getStaff(this.currentPage);
    this.getScroll();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getStaff(page: number): void {
    this.loading = true;
    this.mediaService
      .getStaff(this.id, page)
      .pipe(
        first(),
        map((response) => {
          this.currentPage =
            response.data.Media.staff?.pageInfo?.currentPage || 1;
          this.hasNextPage =
            response.data.Media.staff?.pageInfo?.hasNextPage || false;

          return response.data.Media.staff?.edges || [];
        })
      )
      .subscribe((staff) => {
        this.staff = [...this.staff, ...staff];
        this.loading = false;
      });
  }

  getImage(staff: IStaff): string | null {
    return staff.image.large || staff.image.medium || null;
  }

  getName(staff: IStaff): string | null {
    return staff.name.full || null;
  }

  getScroll(): void {
    this.subscriptions.add(
      this.scrollService.percentScroll().subscribe((viewPercent) => {
        if (this.hasNextPage && !this.loading && viewPercent > 80) {
          this.getStaff(this.currentPage + 1);
        }
      })
    );
  }
}
