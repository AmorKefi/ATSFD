import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';
import { MatDialogModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatSidenavModule, MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatAutocompleteModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AlwaysAuthGuard } from './guard/AlwaysAuthGuard';
import { OnlyLoggedInUsersGuard } from './guard/OnlyLoggedInUsersGuard';
//import { AppSidebarMinimizerComponent } from 'app/components/app-sidebar-minimizer/app-sidebar-minimizer.component';
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
  APP_SIDEBAR_NAV,
 // AppSidebarMinimizerComponent
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
import { AppUserComponent } from './gestion_acces/app-user/app-user.component';
import { AppRoleComponent } from './gestion_acces/app-role/app-role.component';
import { AppFunctionComponent } from './gestion_acces/app-fuction/app-function.component';
import { LoadingModule } from 'ngx-loading';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AppUserService } from './gestion_acces/app-user/app-user.service';
import { AppRoleService } from './gestion_acces/app-role/app-role.service';
import { AppFunctionService } from './gestion_acces/app-fuction/app-function.service';
import { AddRoleComponent } from './gestion_acces/app-role/add-role/add-role.component';
import { AddFunctionComponent } from './gestion_acces/app-fuction/add-function/add-function.component';
import { AddUserComponent } from './gestion_acces/app-user/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRoleFunctionDialog } from './gestion_acces/app-role/add-role-function/add-rf.component';
import { CrudRfService } from './gestion_acces/app-role/crud-rf/crud-rf.service';
import { UpdateDialog } from './gestion_acces/app-role/update-role.component';
import { DeleteRoleFunctionDialog } from './gestion_acces/app-role/crud-rf/delete-roleFunction.component';
import { CrudRfComponent } from './gestion_acces/app-role/crud-rf/crud-rf.component';
import { ViewSfdComponent } from './containers/view-sfd/view-sfd.component';
import { SfdserviceService } from './Services/SFDService/sfdservice.service';
import { DeleteDialog } from './gestion_acces/app-role/delete-role.component';
import { DeletediagComponent } from './containers/deletediag/deletediag.component';
import { GestionComptesComponent } from './containers/gestion-comptes/gestion-comptes.component';
import { CompteFinancierDiagComponent } from './containers/compte-financier-diag/compte-financier-diag.component';
import { CompteFinancierService } from './Services/compte-financier.service';
import { PointDeVenteComponent } from './point-de-vente/point-de-vente.component';
import { PdvServiceService } from './Services/pdvService/pdv-service.service';
import { PdvDiagComponent } from './pdv-diag/pdv-diag.component';
import { DeleteUserDialogComponent } from './gestion_acces/app-user/delete-user-dialog/delete-user-dialog.component';
import { UserDesactivesComponent } from './gestion_acces/app-user/user-desactives/user-desactives.component';
import{SelectStatutComponent} from './gestion_acces/app-user/select-statut/select-statut.component';
import { ResponsablesPdvComponent } from './point-de-vente/responsables-pdv/responsables-pdv.component';
import { AddResponsableComponent } from './point-de-vente/responsables-pdv/add-responsable/add-responsable.component';
import { ModifResponsableComponent } from './point-de-vente/responsables-pdv/modif-responsable/modif-responsable.component';

import { AddAdminSfdComponent } from './containers/sfd-layout/add-admin-sfd/add-admin-sfd.component';
import { GestionAdminSfdComponent } from './containers/sfd-layout/gestion-admin-sfd/gestion-admin-sfd.component';
import { AgentsComponent } from './point-de-vente/agents/agents.component';
import { AddAgentComponent } from './point-de-vente/agents/add-agent/add-agent.component';
import { ModifAgentComponent } from './point-de-vente/agents/modif-agent/modif-agent.component';
import { ModifAdminsfdComponent } from './containers/sfd-layout/modif-adminsfd/modif-adminsfd.component';


import { GestionAdherentComponent } from './gestion-adherent/gestion-adherent.component';
import { AdherentService } from './Services/adherent.service';
import { GestionAdherentDiagComponent } from './gestion-adherent/gestion-adherent-diag/gestion-adherent-diag.component';
import { DeleteAdherentComponent } from './gestion-adherent/delete-adherent/delete-adherent.component';
import { HasAnyAuthorityDirective } from './guards/authorities/has-anhy-authority.directive';
import { UserService } from './gestion_acces/login/user.sercice';
import { LettrageComponent } from './lettrage/lettrage.component';
import { LettrageService } from './Services/LettrageService/lettrage.service';
import { ShowfunctionroleComponent } from './gestion_acces/app-role/showfunctionrole/showfunctionrole.component';

import { ViewpdvComponent } from './viewpdv/viewpdv.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsService } from './transactions.service';
import { TransactionOperationsComponent } from './transaction-operations/transaction-operations.component';
import { TransactionsfdComponent } from './transactionsfd/transactionsfd.component';
import { CompensationComponent } from './compensation/compensation.component';
import { CompensationService } from './compensation.service';
import { TransfertComponent } from './transfert/transfert.component';
import { AddCashinComponent } from './add-cashin/add-cashin.component';
import { CashinServiceService } from './cashin-service.service';
import { TransactionviewComponent } from './transactionview/transactionview.component';
import { CompensationviewComponent } from './compensationview/compensationview.component';
import { StatistiqueService } from './statistique.service';




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
    LoadingModule,
    MDBBootstrapModule.forRoot(),
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
    CrudRfComponent,
    ViewSfdComponent,
    DeleteDialog,
    DeletediagComponent,
    GestionComptesComponent,
    CompteFinancierDiagComponent,
    PointDeVenteComponent,
    PdvDiagComponent,
    DeleteUserDialogComponent,
    UserDesactivesComponent,
    SelectStatutComponent,
    ResponsablesPdvComponent,
    AddResponsableComponent,
    ModifResponsableComponent,

    AddAdminSfdComponent,
    GestionAdminSfdComponent,
    AgentsComponent,
    AddAgentComponent,
    ModifAgentComponent,
    ModifAdminsfdComponent,

    GestionAdherentComponent,
    GestionAdherentDiagComponent,
    DeleteAdherentComponent,
    HasAnyAuthorityDirective,
    LettrageComponent,

    ShowfunctionroleComponent,

    ViewpdvComponent,

    TransactionsComponent,

    TransactionOperationsComponent,

    TransactionsfdComponent,

    CompensationComponent,

    TransfertComponent,

    AddCashinComponent,

    TransactionviewComponent,

    CompensationviewComponent,
    


  
  ],
  providers: [StatistiqueService,CashinServiceService,LettrageService,CompensationService,TransactionsService,UserService,DatePipe,AlwaysAuthGuard, OnlyLoggedInUsersGuard, AuthServiceService, CookieService,CrudRfService , UtilisateurService, AdherentService, PdvServiceService ,RoleServiceService , AppUserService,AppRoleService,AppFunctionService,SfdserviceService,CompteFinancierService,{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ],



  entryComponents: [AddCashinComponent,DeleteAdherentComponent,TransactionOperationsComponent,PdvDiagComponent,CompteFinancierDiagComponent,AddSfdDialogComponent,DeletediagComponent, DeleteDialog ,CrudRfComponent ,DeleteRoleFunctionDialog , UtilisateurDiagComponent,SelectStatutComponent,ModifResponsableComponent
    , AddRoleDiagComponent,GestionAdherentDiagComponent,UpdateDialog,AddFunctionComponent,AddRoleComponent,AddUserComponent,AddRoleFunctionDialog,DeleteUserDialogComponent,AddResponsableComponent,AddSfdDialogComponent,DeletediagComponent, DeleteDialog ,CrudRfComponent ,DeleteRoleFunctionDialog , UtilisateurDiagComponent,SelectStatutComponent,ModifResponsableComponent,AddAdminSfdComponent,AddAgentComponent,ModifAgentComponent,ModifAdminsfdComponent
    , AddRoleDiagComponent,UpdateDialog,AddFunctionComponent,AddRoleComponent,AddUserComponent,AddRoleFunctionDialog,DeleteUserDialogComponent,AddResponsableComponent,ShowfunctionroleComponent],

  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
