import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { OnlyLoggedInUsersGuard } from '../../guard/OnlyLoggedInUsersGuard';
import { AlwaysAuthGuard } from '../../guard/AlwaysAuthGuard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    data: {
     // title: 'Tableau de bord'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
