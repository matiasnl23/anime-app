import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMedia, IMediaEdge, MediaSort } from '@lib/media';
import { ScrollService } from '@lib/scroll';
import { StaffService } from '@lib/staff';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit, OnDestroy {
  id: number;

  currentPage = 1;

  hasNextPage = false;

  loading = false;

  media: IMediaEdge[] = [];

  subscriptions = new Subscription();

  constructor(
    private router: Router,
    private scrollService: ScrollService,
    private staffService: StaffService,
    route: ActivatedRoute
  ) {
    this.id = route.parent?.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getMedia();
    this.getScroll();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getMedia(page: number = 1): void {
    this.loading = true;
    this.staffService
      .getCharactersMedia(this.id, page, { sort: [MediaSort.START_DATE_DESC] })
      .pipe(
        map((response) => {
          this.currentPage =
            response.data.Staff.characterMedia?.pageInfo?.currentPage || 1;
          this.hasNextPage =
            response.data.Staff.characterMedia?.pageInfo?.hasNextPage || false;
          return response.data.Staff.characterMedia?.edges || [];
        })
      )
      .subscribe((media) => {
        this.media = [...this.media, ...media];
        this.loading = false;
      });
  }

  getMediaYear(media: IMedia): string {
    return `${media.seasonYear}`;
  }

  getMediaCover(media: IMedia): string | undefined {
    const { extraLarge, large, medium } = media.coverImage;
    return extraLarge || large || medium;
  }

  getScroll(): void {
    this.subscriptions.add(
      this.scrollService.percentScroll().subscribe((percentValue) => {
        if (!this.loading && this.hasNextPage && percentValue > 80) {
          this.getMedia(this.currentPage + 1);
        }
      })
    );
  }

  onClick(e: { id: number; element: string }): void {
    const item = this.media[e.id];
    this.router.navigate(['/', 'media', item.node.id]);
  }
}
