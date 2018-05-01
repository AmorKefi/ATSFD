import { NgModule } from '@angular/core';
import { Routes, RouterModule , CanActivate } from '@angular/router';
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
import { AppRoleComponent } from './gestion_acces/app-role/app-role.component';
import { AppUserComponent } from './gestion_acces/app-user/app-user.component';
import { AppFunctionComponent } from './gestion_acces/app-fuction/app-function.component';
import { ViewSfdComponent } from './containers/view-sfd/view-sfd.component';
import { GestionComptesComponent } from './containers/gestion-comptes/gestion-comptes.component';
import { PointDeVenteComponent } from './point-de-vente/point-de-vente.component';
import { UserDesactivesComponent } from './gestion_acces/app-user/user-desactives/user-desactives.component';
import { ResponsablesPdvComponent } from './point-de-vente/responsables-pdv/responsables-pdv.component';

import { GestionAdminSfdComponent } from './containers/sfd-layout/gestion-admin-sfd/gestion-admin-sfd.component';
import { AgentsComponent } from './point-de-vente/agents/agents.component';

import { GestionAdherentComponent } from './gestion-adherent/gestion-adherent.component';
import { LettrageComponent } from './lettrage/lettrage.component';


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
    component: SfdLayoutComponent,
  },
  
  {
    path: 'GestionDesAdmin',
    data: {
      title: 'Gestion des administrateurs SFD'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: GestionAdminSfdComponent,
  },
  {
    path: 'GestionDesAgents',
    data: {
      title: 'Gestion des agents'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: AgentsComponent,
    
  },
 
 
  {
    path: 'GestionAccès',
    data: {
      title: 'Gestion des utilisateurs'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: AppUserComponent
  },
  {
    path: 'GestionResPdv',
    data: {
      title: 'Gestion des responsables'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: ResponsablesPdvComponent
  },
  {
    path: 'auth',

    component: AuthentificationComComponent
  },
  {
    path: 'GestionRoles',
    data: {
      title: 'Gestion des rôles'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: AppRoleComponent
  },
  {
    path: 'GestionFontions',
    data: {
      title: 'Gestion des fonctions'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: AppFunctionComponent
  },
  {
    path: 'UsersDesactives',

    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: UserDesactivesComponent
  },
  {
    path : 'Lettrage',
    canActivate : [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: LettrageComponent
  },
  {
    path: 'GestionParamètresGlobaux',
    data: {
      title: 'Paramètres Globaux'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: ParamètresglobauxLayoutComponent
  },
  {
    path: 'GestionParamètresComptes',
    data: {
      title: 'Paramètres comptes'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: ParamètresCompteLayoutComponent
  }, 
  {
    path:'GestionAdherents',
    data:{
      title:'Gestion des Adherents'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: GestionAdherentComponent
  },
  {
    path: 'Comptes/:Acteur',
    data: {
      title: 'Gestion des comptes'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: GestionComptesComponent
  },

  {
    path: 'Statistiques',
    data: {
      title: 'Statistiques'
    },
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: StatistiquesLayoutComponent

  },{
    path: 'GestionSFD/view/:id',
    canActivate : [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    component: ViewSfdComponent
  },
  {
    path:'GestionPDV',
    canActivate : [OnlyLoggedInUsersGuard,AlwaysAuthGuard],
    component: PointDeVenteComponent,
    data:{
      title: 'Gestion Des Point de Vente'
    }
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
