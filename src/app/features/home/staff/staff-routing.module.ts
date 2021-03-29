import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff.component';

const routes: Routes = [
  {
    path: ':id',
    component: StaffComponent,
    children: [
      { path: 'characters', data: { name: 'Characters' } },
      { path: 'media', data: { name: 'Media' } },
      { path: '**', pathMatch: 'full', redirectTo: 'characters' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
