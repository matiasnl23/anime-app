import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CardsGridComponent } from './components/cards-grid/cards-grid.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RelationsComponent } from './components/relations/relations.component';
import { StaffComponent } from './components/staff/staff.component';
import { TopItemComponent } from './components/top-item/top-item.component';
import { DetailComponent } from './detail/detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import * as fromHome from './state';
import { TopMediaComponent } from './top-media/top-media.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CardsGridComponent,
    TopItemComponent,
    DetailComponent,
    TopMediaComponent,
    CharactersComponent,
    RelationsComponent,
    StaffComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(fromHome.featureKey, fromHome.reducer),
  ],
})
export class HomeModule {}
