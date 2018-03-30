import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../../Services/RoleService/role-service.service';

@Component({
  selector: 'app-gestion-roles-layout',
  templateUrl: './gestion-roles-layout.component.html',
  styleUrls: ['./gestion-roles-layout.component.scss']
})
export class GestionRolesLayoutComponent implements OnInit {

  constructor(private roleservice: RoleServiceService) { }
  // tslint:disable-next-line:member-ordering
  roles: any ;
  ngOnInit() {
    this.roleservice.getroles().subscribe(res => this.roles = res, err => console.log(err));
    }

}
