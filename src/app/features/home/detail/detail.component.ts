import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DetailService } from 'src/app/lib/detail/services/detail.service';
import { ICover, IMedia } from 'src/app/lib/media/interfaces/media.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  media?: IMedia;

  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
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
}
