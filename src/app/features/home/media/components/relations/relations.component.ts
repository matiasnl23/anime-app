import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMedia, IMediaEdge, MediaService } from '@lib/media';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss'],
})
export class RelationsComponent implements OnInit {
  id: number;

  relations: IMediaEdge[] = [];

  constructor(
    private mediaService: MediaService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.id = route.parent?.snapshot.params?.id;
  }

  ngOnInit(): void {
    this.getRelations();
  }

  getCover(media: IMedia): string | undefined {
    const { extraLarge, large, medium } = media.coverImage;
    return extraLarge || large || medium;
  }

  getRelations(): void {
    this.mediaService
      .getRelations(this.id)
      .pipe(map((response) => response.data.Media.relations?.edges || []))
      .subscribe((relations) => {
        this.relations = [...this.relations, ...relations];
      });
  }

  onClick(e: { id: number; element: string }): void {
    const item = this.relations[e.id];
    this.router.navigate(['/', 'media', item.node.id]);
  }
}
