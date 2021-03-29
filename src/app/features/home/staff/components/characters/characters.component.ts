import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICharacterEdge } from 'src/app/lib/character/interfaces/character.interface';
import { StaffService } from 'src/app/lib/staff/services/staff.service';

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

  constructor(private staffService: StaffService, route: ActivatedRoute) {
    this.id = route.parent?.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getCharacters();
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
}
