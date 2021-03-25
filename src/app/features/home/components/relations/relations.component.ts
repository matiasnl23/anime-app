import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  IMedia,
  IMediaEdge,
} from 'src/app/lib/media/interfaces/media.interface';
import { MediaService } from 'src/app/lib/media/services/media.service';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss'],
})
export class RelationsComponent implements OnInit {
  id: number;

  relations$?: Observable<IMediaEdge[]>;

  constructor(private mediaService: MediaService, route: ActivatedRoute) {
    this.id = route.parent?.snapshot.params?.id;
  }

  ngOnInit(): void {
    this.relations();
  }

  relations(): void {
    this.relations$ = this.mediaService
      .getRelations(this.id)
      .pipe(map((response) => response.data.Media.relations?.edges || []));
  }

  getCover(media: IMedia): string | null {
    const { extraLarge, large, medium } = media.coverImage;
    return extraLarge || large || medium || null;
  }
}
