import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaFormat } from 'src/app/lib/media/enums/media-format.enum';
import { ITopAnime } from 'src/app/lib/top-results/interfaces/top-results.interface';
import { TopResultsService } from 'src/app/lib/top-results/services/top-results.service';

@Component({
  selector: 'app-top-media',
  templateUrl: './top-media.component.html',
  styleUrls: ['./top-media.component.scss'],
})
export class TopMediaComponent implements OnInit {
  topAnimes?: Observable<ITopAnime[]>;

  topMovies?: Observable<ITopAnime[]>;

  topOva?: Observable<ITopAnime[]>;

  constructor(private topResults: TopResultsService) {}

  ngOnInit(): void {
    this.topAnimes = this.topResults
      .getTopAnimes(MediaFormat.TV)
      .valueChanges.pipe(map((r) => r.data.Page.media));

    this.topMovies = this.topResults
      .getTopAnimes(MediaFormat.MOVIE)
      .valueChanges.pipe(map((r) => r.data.Page.media));

    this.topOva = this.topResults
      .getTopAnimes(MediaFormat.OVA)
      .valueChanges.pipe(map((r) => r.data.Page.media));
  }
}
