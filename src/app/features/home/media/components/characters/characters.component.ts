import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterSort } from '@lib/character';
import { StaffLanguage } from '@lib/staff';
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
    private router: Router,
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
      .getCharacters(this.id, page, {
        sort: [CharacterSort.ROLE],
        staffLanguage: StaffLanguage.JAPANESE,
      })
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

  getCharacterImage(character: ICharacter): string | undefined {
    return character.image.large || character.image.medium;
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

  getVoiceActorImage(edge: ICharacterEdge): string | undefined {
    return (
      edge.voiceActors![0] &&
      (edge.voiceActors![0].image.large || edge.voiceActors![0].image.medium)
    );
  }

  onClick(e: { id: number; element: string }): void {
    let item = this.characters[e.id];

    if (e.element === 'right') {
      this.router.navigate(['/', 'staff', item.voiceActors![0].id]);
      return;
    }
  }
}
