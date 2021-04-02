import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { MediaComponent } from './components/media/media.component';
import { StaffMediaRolesComponent } from './components/staff-roles/staff-roles.component';
import { StaffComponent } from './staff.component';

const routes: Routes = [
  {
    path: ':id',
    component: StaffComponent,
    children: [
      {
        path: 'characters',
        component: CharactersComponent,
        data: { name: 'Characters' },
      },
      {
        path: 'media',
        component: MediaComponent,
        data: { name: 'Media' },
      },
      {
        path: 'staff',
        component: StaffMediaRolesComponent,
        data: { name: 'Staff' },
      },
      { path: '**', pathMatch: 'full', redirectTo: 'characters' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
