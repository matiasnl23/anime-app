import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsGridComponent } from './components/cards-grid/cards-grid.component';
import { TopItemComponent } from './components/top-item/top-item.component';
import { DetailComponent } from './detail/detail.component';
import { TopMediaComponent } from './top-media/top-media.component';
import { CharactersComponent } from './components/characters/characters.component';
import { RelationsComponent } from './components/relations/relations.component';
import { StaffComponent } from './components/staff/staff.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, CardsGridComponent, TopItemComponent, DetailComponent, TopMediaComponent, CharactersComponent, RelationsComponent, StaffComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
