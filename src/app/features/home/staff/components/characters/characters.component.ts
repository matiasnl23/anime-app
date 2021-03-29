import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICharacter, ICharacterEdge } from '@lib/character';
import { IMedia } from '@lib/media';
import { ScrollService } from '@lib/scroll';
import { StaffService } from '@lib/staff';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-component',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  id: number;

  characters: ICharacterEdge[] = [];

  currentPage = 1;

  hasNextPage = false;

  loading = false;

  subscriptions = new Subscription();

  constructor(
    private router: Router,
    private scrollService: ScrollService,
    private staffService: StaffService,
    route: ActivatedRoute
  ) {
    this.id = route.parent?.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getCharacters();
    this.getScroll();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getCharacters(page: number = 1): void {
    this.loading = true;
    this.staffService
      .getCharacters(this.id, page)
      .pipe(
        map((result) => {
          this.currentPage =
            result.data.Staff.characters?.pageInfo?.currentPage || 1;
          this.hasNextPage =
            result.data.Staff.characters?.pageInfo?.hasNextPage || false;
          return result.data.Staff.characters?.edges || [];
        })
      )
      .subscribe((result) => {
        this.characters = [...this.characters, ...result];
        this.loading = false;
      });
  }

  getCharacterImage(character: ICharacter): string | undefined {
    return character.image.large || character.image.medium;
  }

  getMediaImage(media: IMedia): string | undefined {
    if (!media) return;

    const { extraLarge, large, medium } = media.coverImage;
    return extraLarge || large || medium || undefined;
  }

  getMediaYear(media: IMedia): string | undefined {
    return media.seasonYear ? `${media.seasonYear}` : undefined;
  }

  getScroll() {
    this.subscriptions.add(
      this.scrollService.percentScroll().subscribe((percentValue) => {
        if (!this.loading && this.hasNextPage && percentValue > 80) {
          this.getCharacters(this.currentPage + 1);
        }
      })
    );
  }

  onClick(e: { id: number; element: string }) {
    const item = this.characters[e.id];

    if (e.element === 'right') {
      this.router.navigate(['/', 'media', item.media![0].id]);
      return;
    }
  }
}
