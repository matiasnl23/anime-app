import { Component, OnInit } from '@angular/core';
import { IMedia, MediaFormat, MediaService, MediaSort } from '@lib/media';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top-media',
  templateUrl: './top-media.component.html',
  styleUrls: ['./top-media.component.scss'],
})
export class TopMediaComponent implements OnInit {
  topAnimes?: Observable<IMedia[]>;

  topMovies?: Observable<IMedia[]>;

  topOva?: Observable<IMedia[]>;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.topAnimes = this.mediaService
      .getMediaPaginated(1, {
        format: MediaFormat.TV,
        perPage: 10,
        sort: [MediaSort.POPULARITY_DESC],
      })
      .pipe(map((r) => r.data.Page.media || []));

    this.topMovies = this.mediaService
      .getMediaPaginated(1, {
        format: MediaFormat.MOVIE,
        perPage: 10,
        sort: [MediaSort.POPULARITY_DESC],
      })
      .pipe(map((r) => r.data.Page.media || []));

    this.topOva = this.mediaService
      .getMediaPaginated(1, {
        format: MediaFormat.OVA,
        perPage: 10,
        sort: [MediaSort.POPULARITY_DESC],
      })
      .pipe(map((r) => r.data.Page.media || []));
  }
}
