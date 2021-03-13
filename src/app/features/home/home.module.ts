import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsGridComponent } from './components/cards-grid/cards-grid.component';
import { TopItemComponent } from './components/top-item/top-item.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, CardsGridComponent, TopItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
