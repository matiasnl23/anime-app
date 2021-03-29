import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { RelationsComponent } from './components/relations/relations.component';
import { StaffComponent } from './components/staff/staff.component';
import { MediaComponent } from './media.component';

const routes: Routes = [
  {
    path: ':id',
    component: MediaComponent,
    children: [
      {
        path: 'characters',
        component: CharactersComponent,
        data: {
          name: 'Characters',
        },
      },
      {
        path: 'staff',
        component: StaffComponent,
        data: {
          name: 'Staff',
        },
      },
      {
        path: 'relations',
        component: RelationsComponent,
        data: {
          name: 'Relations',
        },
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'characters',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
