import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'teams/:id',
    component: TeamDetailComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
