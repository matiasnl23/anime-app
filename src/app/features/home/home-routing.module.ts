import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { RelationsComponent } from './components/relations/relations.component';
import { StaffComponent } from './components/staff/staff.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home.component';
import { TopMediaComponent } from './top-media/top-media.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: TopMediaComponent },
      {
        path: 'detail/:id',
        component: DetailComponent,
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
      { path: '**', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
