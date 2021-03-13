import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopItemComponent } from './top-item.component';

describe('TopItemComponent', () => {
  let component: TopItemComponent;
  let fixture: ComponentFixture<TopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
