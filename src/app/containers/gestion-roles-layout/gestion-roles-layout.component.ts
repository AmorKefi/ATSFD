import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../../Services/RoleService/role-service.service';
import { MatDialog } from '@angular/material';
import { AddRoleDiagComponent } from '../add-role-diag/add-role-diag.component';

@Component({
  selector: 'app-gestion-roles-layout',
  templateUrl: './gestion-roles-layout.component.html',
  styleUrls: ['./gestion-roles-layout.component.scss']
})
export class GestionRolesLayoutComponent implements OnInit {

  constructor(private roleservice: RoleServiceService, private diag: MatDialog) { }
  // tslint:disable-next-line:member-ordering
  roles: any ;
  ngOnInit() {
    this.roleservice.getroles().subscribe(res => this.roles = res, err => console.log(err));
    }
    Ajouter() {
      const datal = {caller : ''};
      datal.caller = 'Ajouter';
      this.diag.open(AddRoleDiagComponent, {
        width: '700px',
        data: datal
      });
    }
    Modifier(role) {
      const datal = {caller : ''};
      datal.caller = 'Modifier';
      this.diag.open(AddRoleDiagComponent, {
        width: '700px',
        data: datal
      });
    }
    Supprimer(role) {

    }
    Consulter(role) {

    }

}
