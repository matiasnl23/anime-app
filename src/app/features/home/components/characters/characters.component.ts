import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  characters$?: Observable<ICharacterEdge[]>;

  constructor(private mediaService: MediaService, route: ActivatedRoute) {
    this.id = route.parent?.snapshot.params?.id;
  }

  ngOnInit(): void {
    this.characters();
  }

  characters(): void {
    this.characters$ = this.mediaService
      .getCharacters(this.id)
      .pipe(map((response) => response.data.Media.characters?.edges || []));
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
