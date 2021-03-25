import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICharacterConnection } from 'src/app/lib/character/interfaces/character.interface';
import { DetailService } from 'src/app/lib/detail/services/detail.service';
import { ICover, IMedia } from 'src/app/lib/media/interfaces/media.interface';
import { MediaService } from 'src/app/lib/media/services/media.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  characters$?: Observable<ICharacterConnection | null>;

  media?: IMedia;

  constructor(
    private detailService: DetailService,
    private mediaService: MediaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.detailService
        .getFullData(params.id)
        .pipe(map((r) => r.data.Media))
        .subscribe((media) => (this.media = media));

      this.getCharacters(params.id);
    });
  }

  getCoverImage(coverImage: ICover): string | null {
    const { medium, large, extraLarge } = coverImage;
    return extraLarge || large || medium || '';
  }

  getDetails(media: IMedia): { title: string; value: any }[] {
    const details = [
      { title: 'Título original', value: media.title?.native },
      { title: 'Formato', value: media.format },
      { title: 'Duración', value: media.duration },
      { title: 'Episodios', value: media.episodes },
      { title: 'Volúmenes', value: media.volumes },
      { title: 'Temporada', value: media.season },
      { title: 'Año de estreno', value: media.seasonYear },
      { title: 'Origen', value: media.source },
      {
        title: 'Estudios',
        value: media.studios?.nodes?.map((e) => e.name).join(', '),
      },
    ];

    return details.filter((d) => d.value);
  }

  getCharacters(id: number): void {
    this.characters$ = this.mediaService
      .getCharacters(id)
      .pipe(map((response) => response.data.Media.characters || null));
  }

  getRoutes() {
    return this.route.routeConfig?.children?.filter((r) => r.path !== '**');
  }
}
