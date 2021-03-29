import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from '@ui/ui.module';
import { CharactersComponent } from './components/characters/characters.component';
import { MediaComponent } from './components/media/media.component';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';

@NgModule({
  imports: [CommonModule, StaffRoutingModule, UIModule],
  declarations: [StaffComponent, CharactersComponent, MediaComponent],
})
export class StaffModule {}
