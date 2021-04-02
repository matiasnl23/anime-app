import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMedia, IMediaEdge } from '@lib/media';
import { StaffService } from '@lib/staff';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-staff-media-roles',
  templateUrl: './staff-roles.component.html',
  styleUrls: ['./staff-roles.component.scss'],
})
export class StaffMediaRolesComponent implements OnInit, OnDestroy {
  id: number;

  currentPage = 1;

  hasNextPage = false;

  loading = false;

  media: IMediaEdge[] = [];

  subscriptions = new Subscription();

  constructor(
    private rotuer: Router,
    private staffService: StaffService,
    route: ActivatedRoute
  ) {
    this.id = route.parent?.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getMedia();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMedia(page: number = 1) {
    this.loading = true;
    this.subscriptions.add(
      this.staffService
        .getStaffMediaRoles(this.id, page)
        .pipe(
          map((response) => {
            this.currentPage =
              response.data.Staff.staffMedia?.pageInfo?.currentPage || 1;
            this.hasNextPage =
              response.data.Staff.staffMedia?.pageInfo?.hasNextPage || false;
            return response.data.Staff.staffMedia?.edges || [];
          })
        )
        .subscribe((media) => {
          this.media = media;
          this.loading = false;
        })
    );
  }

  getMediaCover(media: IMedia) {
    const { extraLarge, large, medium } = media.coverImage;
    return extraLarge || large || medium;
  }

  getMediaYear(media: IMedia) {
    return `${media.seasonYear}`;
  }

  onClick(e: { id: number; element: string }, id: number) {
    this.rotuer.navigate(['/', 'media', id]);
  }
}
