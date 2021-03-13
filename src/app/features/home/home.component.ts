import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaFormat } from 'src/app/lib/media/enums/media-format.enum';
import { ITopAnime } from 'src/app/lib/top-results/interfaces/top-results.interface';
import { TopResultsService } from 'src/app/lib/top-results/services/top-results.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  getCoverImage(media: ITopAnime): string | null {
    const { coverImage: ci } = media;
    return `url(${ci.extraLarge || ci.large || ci.medium})`;
  }
}
