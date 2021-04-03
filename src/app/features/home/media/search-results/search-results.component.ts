import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMedia, IMediaOptions, MediaService, MediaSort } from '@lib/media';
import { ScrollService } from '@lib/scroll';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  currentPage = 1;

  hasNextPage = false;

  loading = false;

  media: IMedia[] = [];

  subscriptions = new Subscription();

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private router: Router,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      combineLatest([
        this.route.queryParams,
        this.scrollService.percentScroll().pipe(
          filter(
            (value) => value > 80 && this.loading === false && this.hasNextPage
          ),
          startWith(null)
        ),
      ]).subscribe(([query, scroll]) => {
        const page = scroll ? this.currentPage + 1 : this.currentPage;
        this.search(page, query);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getCover(media: IMedia): string | undefined {
    const { extraLarge, large, medium } = media.coverImage;
    return extraLarge || large || medium;
  }

  goToMedia(id: number) {
    this.router.navigate(['/', 'media', id]);
  }

  search(page = 1, options?: IMediaOptions) {
    this.loading = true;
    this.mediaService
      .getMediaPaginated(page, {
        sort: [MediaSort.SEARCH_MATCH],
        perPage: 10,
        ...options,
      })
      .pipe(
        map((r) => {
          this.currentPage = r.data.Page.pageInfo.currentPage || 1;
          this.hasNextPage = r.data.Page.pageInfo.hasNextPage || false;
          return r.data.Page.media || [];
        })
      )
      .subscribe((media) => {
        this.media = [...this.media, ...media];
        this.loading = false;
      });
  }
}
