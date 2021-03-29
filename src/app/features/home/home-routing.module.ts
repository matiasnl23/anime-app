import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TopMediaComponent } from './top-media/top-media.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: TopMediaComponent },
      {
        path: 'media',
        loadChildren: () =>
          import('./media/media.module').then((m) => m.MediaModule),
      },
      {
        path: 'staff',
        loadChildren: () =>
          import('./staff/staff.module').then((m) => m.StaffModule),
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
