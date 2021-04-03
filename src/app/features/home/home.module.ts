import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CardsGridComponent } from './components/cards-grid/cards-grid.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopItemComponent } from './components/top-item/top-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import * as fromHome from './state';
import { TopMediaComponent } from './top-media/top-media.component';

@NgModule({
  declarations: [
    CardsGridComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    TopItemComponent,
    TopMediaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    StoreModule.forFeature(fromHome.featureKey, fromHome.reducer),
  ],
})
export class HomeModule {}
