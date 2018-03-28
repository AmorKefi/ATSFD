import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanActivate } from '@angular/router';
import { AlwaysAuthGuard } from './guard/AlwaysAuthGuard';
import { OnlyLoggedInUsersGuard } from './guard/OnlyLoggedInUsersGuard';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
  
} from './containers';
import { SfdLayoutComponent } from './containers/sfd-layout/sfd-layout.component';
import { StatistiquesLayoutComponent } from './containers/statistiques-layout/statistiques-layout.component';
import { GestionUtilisateursLayoutComponent } from './containers/gestion-utilisateurs-layout/gestion-utilisateurs-layout.component';
import { GestionRolesLayoutComponent } from './containers/gestion-roles-layout/gestion-roles-layout.component';
import { GestionFonctionsLayoutComponent } from './containers/gestion-fonctions-layout/gestion-fonctions-layout.component';
import { ParamètresglobauxLayoutComponent } from './containers/param\u00E8tresglobaux-layout/param\u00E8tresglobaux-layout.component';
import { ParamètresCompteLayoutComponent } from './containers/param\u00E8tres-compte-layout/param\u00E8tres-compte-layout.component';
import { AuthentificationComComponent } from './components/authentification-com/authentification-com.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'GestionSFD',
    data: {
      title: 'Gestion des SFD'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component:SfdLayoutComponent,
  },
  {
    path: 'GestionAccès',
    data: {
      title: 'Gestion des utilisateurs'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component:GestionUtilisateursLayoutComponent
  },
  {
    path: 'auth',
   
    component:AuthentificationComComponent
  },
  {
    path: 'GestionRoles',
    data: {
      title: 'Gestion des rôles'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component:GestionRolesLayoutComponent
  },
  {
    path: 'GestionFontions',
    data: {
      title: 'Gestion des fonctions'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component:GestionFonctionsLayoutComponent
  },
  {
    path: 'GestionParamètresGlobaux',
    data: {
      title: 'Paramètres Globaux'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component:ParamètresglobauxLayoutComponent
  },
  {
    path: 'GestionParamètresComptes',
    data: {
      title: 'Paramètres comptes'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component:ParamètresCompteLayoutComponent
  },

  {
    path: 'Statistiques',
    data: {
      title: 'Statistiques'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component:StatistiquesLayoutComponent
    
  },
  {
    path: '',
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: FullLayoutComponent,
    data: {
      title: 'Tableau de bord'
    },
  
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
