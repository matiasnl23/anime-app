import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from '@ui/ui.module';
import { CharactersComponent } from './components/characters/characters.component';
import { RelationsComponent } from './components/relations/relations.component';
import { StaffComponent } from './components/staff/staff.component';
import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';

@NgModule({
  imports: [CommonModule, MediaRoutingModule, UIModule],
  declarations: [
    CharactersComponent,
    MediaComponent,
    RelationsComponent,
    StaffComponent,
  ],
  exports: [],
})
export class MediaModule {}
