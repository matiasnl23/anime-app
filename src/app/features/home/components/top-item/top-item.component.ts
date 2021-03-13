import { Component, Input, OnInit } from '@angular/core';
import { ITopAnime } from 'src/app/lib/top-results/interfaces/top-results.interface';

@Component({
  selector: 'app-top-item',
  templateUrl: './top-item.component.html',
  styleUrls: ['./top-item.component.scss'],
})
export class TopItemComponent implements OnInit {
  @Input()
  item: ITopAnime = {} as ITopAnime;

  constructor() {}

  ngOnInit(): void {}

  getCoverImage(media: ITopAnime): string | null {
    const { coverImage: ci } = media;
    return `url(${ci.extraLarge || ci.large || ci.medium})`;
  }
}
