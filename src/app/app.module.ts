import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AlwaysAuthGuard } from './guard/AlwaysAuthGuard';
import { OnlyLoggedInUsersGuard } from './guard/OnlyLoggedInUsersGuard';

import { AuthServiceService } from './Services/AuthService/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,




  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SfdLayoutComponent } from './containers/sfd-layout/sfd-layout.component';
import { StatistiquesLayoutComponent } from './containers/statistiques-layout/statistiques-layout.component';
import { GestionUtilisateursLayoutComponent } from './containers/gestion-utilisateurs-layout/gestion-utilisateurs-layout.component';
import { GestionRolesLayoutComponent } from './containers/gestion-roles-layout/gestion-roles-layout.component';
import { GestionFonctionsLayoutComponent } from './containers/gestion-fonctions-layout/gestion-fonctions-layout.component';
import {ParamètresglobauxLayoutComponent} from './containers/paramètresglobaux-layout/paramètresglobaux-layout.component';
import {ParamètresCompteLayoutComponent} from './containers/paramètres-compte-layout/paramètres-compte-layout.component';
import { AddSfdDialogComponent } from './containers/add-sfd-dialog/add-sfd-dialog.component';
import { AddUserComponent } from './containers/add-user/add-user.component';
import { AddUserDialogComponent } from './containers/add-user-dialog/add-user-dialog.component';
import { AuthentificationComComponent } from './components/authentification-com/authentification-com.component';
import { UtilisateurService } from './Services/UtilisateursService/utilisateur.service';
import { UtilisateurDiagComponent } from './containers/utilisateur-diag/utilisateur-diag.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule


  ],

  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    SfdLayoutComponent,
    StatistiquesLayoutComponent,
    GestionUtilisateursLayoutComponent,
    GestionRolesLayoutComponent,
    GestionFonctionsLayoutComponent,
    ParamètresglobauxLayoutComponent,
    ParamètresCompteLayoutComponent,
    AddSfdDialogComponent,
    AddUserComponent,
    AddUserDialogComponent,
    AuthentificationComComponent,
    UtilisateurDiagComponent
  ],
  providers: [AlwaysAuthGuard, OnlyLoggedInUsersGuard, AuthServiceService, CookieService, UtilisateurService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ],
  entryComponents: [AddSfdDialogComponent, UtilisateurDiagComponent]
})
export class AppModule { }
