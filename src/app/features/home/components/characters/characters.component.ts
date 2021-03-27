import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, tap } from 'rxjs/operators';
import {
  ICharacter,
  ICharacterEdge,
} from 'src/app/lib/character/interfaces/character.interface';
import { MediaService } from 'src/app/lib/media/services/media.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  id: number;

  characters: ICharacterEdge[] = [];

  currentPage: number = 1;

  hasNextPage: boolean = false;

  loading: boolean = false;

  constructor(private mediaService: MediaService, route: ActivatedRoute) {
    this.id = route.parent?.snapshot.params?.id;
  }

  ngOnInit(): void {
    this.getCharacters();
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
      .subscribe(
        (characters) => (this.characters = [...this.characters, ...characters])
      );
  }

  getCharacterImage(character: ICharacter): string | null {
    return character.image.large || character.image.medium || null;
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
