import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaType } from '@lib/media';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  type = MediaType.ANIME;

  typeOptions = [
    { value: MediaType.ANIME, description: 'ANIME' },
    { value: MediaType.MANGA, description: 'MANGA' },
  ];

  subscriptions = new Subscription();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [null, [Validators.required, Validators.minLength(2)]],
      type: [this.type, [Validators.required]],
    });

    this.subscriptions.add(
      this.form
        .get('type')
        ?.valueChanges.subscribe((type) => (this.type = type))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    if (this.form.valid) {
      const { search, type } = this.form.value;

      this.router.navigate(['/', 'media', 'search-results'], {
        queryParams: {
          search,
          type,
        },
      });
    }
  }
}
