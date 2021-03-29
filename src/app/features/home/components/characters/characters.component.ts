import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import {
  ICharacter,
  ICharacterEdge,
} from 'src/app/lib/character/interfaces/character.interface';
import { MediaService } from 'src/app/lib/media/services/media.service';
import { ScrollService } from 'src/app/lib/scroll/services/scroll.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, AfterViewInit, OnDestroy {
  id: number;

  characters: ICharacterEdge[] = [];

  currentPage = 1;

  hasNextPage = false;

  loading = false;

  subscriptions = new Subscription();

  constructor(
    private mediaService: MediaService,
    private scrollService: ScrollService,
    route: ActivatedRoute
  ) {
    this.id = route.parent?.snapshot.params?.id;
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  ngAfterViewInit(): void {
    this.getScroll();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getCharacters(page: number = 1): void {
    this.loading = true;

    this.mediaService
      .getCharacters(this.id, page)
      .pipe(
        first(),
        tap((result) => {
          this.currentPage = result?.pageInfo?.currentPage || 1;
          this.hasNextPage = result?.pageInfo?.hasNextPage || false;
        }),
        map((characterConnection) => characterConnection?.edges || [])
      )
      .subscribe((characters) => {
        this.characters = [...this.characters, ...characters];
        this.loading = false;
      });
  }

  getCharacterImage(character: ICharacter): string | null {
    return character.image.large || character.image.medium || null;
  }

  getScroll(): void {
    this.subscriptions.add(
      this.scrollService.percentScroll().subscribe((viewPercent) => {
        if (this.hasNextPage && !this.loading && viewPercent > 80) {
          this.getCharacters(this.currentPage + 1);
        }
      })
    );
  }

  getVoiceActorName(edge: ICharacterEdge): string {
    return edge.voiceActors?.length ? edge.voiceActors[0].name.full : '';
  }

  getVoiceActorImage(edge: ICharacterEdge): string | null {
    return edge.voiceActors?.length
      ? edge.voiceActors[0].image.large || edge.voiceActors[0].image.medium
      : null;
  }
}
