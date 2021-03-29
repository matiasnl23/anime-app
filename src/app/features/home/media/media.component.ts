import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICover, IMedia } from '@lib/media';
import { map } from 'rxjs/operators';
import { DetailService } from 'src/app/lib/detail/services/detail.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  media?: IMedia;

  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.detailService
        .getFullData(params.id)
        .pipe(map((r) => r.data.Media))
        .subscribe((media) => (this.media = media));
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

  getRoutes() {
    return this.route.routeConfig?.children?.filter((r) => r.path !== '**');
  }
}
