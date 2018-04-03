import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatDialogModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatSidenavModule, MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatAutocompleteModule } from '@angular/material';
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
import { Ng2SmartTableModule } from 'ng2-smart-table';
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
import { AddUserDialogComponent } from './containers/add-user-dialog/add-user-dialog.component';
import { AuthentificationComComponent } from './components/authentification-com/authentification-com.component';
import { UtilisateurService } from './Services/UtilisateursService/utilisateur.service';
import { UtilisateurDiagComponent } from './containers/utilisateur-diag/utilisateur-diag.component';
import { RoleServiceService } from './Services/RoleService/role-service.service';
import { AddRoleDiagComponent } from './containers/add-role-diag/add-role-diag.component';
import { AppUserComponent } from './gestion_access/app-user/app-user.component';
import { AppRoleComponent } from './gestion_access/app-role/app-role.component';
import { AppFunctionComponent } from './gestion_access/app-fuction/app-function.component';
import { LoadingModule } from 'ngx-loading';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AppUserService } from './gestion_access/app-user/app-user.service';
import { AppRoleService } from './gestion_access/app-role/app-role.service';
import { AppFunctionService } from './gestion_access/app-fuction/app-function.service';
import { AddRoleComponent } from './gestion_access/app-role/add-role/add-role.component';
import { AddFunctionComponent } from './gestion_access/app-fuction/add-function/add-function.component';
import { AddUserComponent } from './gestion_access/app-user/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRoleFunctionDialog } from './gestion_access/app-role/add-role-function/add-rf.component';
import { CrudRfService } from './gestion_access/app-role/crud-rf/crud-rf.service';
import { UpdateDialog } from './gestion_access/app-role/update-role.component';
import { DeleteRoleFunctionDialog } from './gestion_access/app-role/crud-rf/delete-roleFunction.component';
import { CrudRfComponent } from './gestion_access/app-role/crud-rf/crud-rf.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatAutocompleteModule,
    LoadingModule
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
    AddUserDialogComponent,
    AuthentificationComComponent,
    UtilisateurDiagComponent,
    AddRoleDiagComponent,
    AppUserComponent,
    AppRoleComponent,
    AppFunctionComponent,
    AddFunctionComponent,
    AddRoleComponent,
    AddUserComponent,
    AddRoleFunctionDialog,
    UpdateDialog,
    DeleteRoleFunctionDialog,
    CrudRfComponent
  ],
  providers: [AlwaysAuthGuard, OnlyLoggedInUsersGuard, AuthServiceService, CookieService,CrudRfService , UtilisateurService, RoleServiceService , AppUserService,AppRoleService,AppFunctionService,{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ],
  entryComponents: [AddSfdDialogComponent, CrudRfComponent ,DeleteRoleFunctionDialog , UtilisateurDiagComponent, AddRoleDiagComponent,UpdateDialog,AddFunctionComponent,AddRoleComponent,AddUserComponent,AddRoleFunctionDialog ]
})
export class AppModule { }
