import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
import { AppRoleService } from '../app-role.service';
import { AppFunctionService } from '../../app-fuction/app-function.service';
// import { RoleFunction } from '../../model/role-function';
// import { FunctionApp } from '../../model/function-app';
// import { AppRole } from '../../model/role.model';
import { CrudRfService } from './crud-rf.service';
import { RoleFunction } from '../../../model/role-function';
import { AppRole } from '../../../model/role.model';
import { FunctionApp } from '../../../model/function-app';

@Component({
  selector: 'app-crud-rf',
  templateUrl: './crud-rf.component.html',
  styleUrls: ['./crud-rf.component.scss']
})
export class CrudRfComponent implements OnInit {
   roleFunction:RoleFunction;
   role:AppRole;
   appfunction:FunctionApp=new FunctionApp();
  constructor(private appFunctionService:AppFunctionService,private appRoleService:AppRoleService,private crudRfService:CrudRfService ,private dialogRef: MatDialogRef<CrudRfComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
     this.roleFunction=data.role_function;
     this.role=data.role;
     console.log(this.roleFunction);
   }
  

  ngOnInit() {
  }

  UpdateRoleFunction(){
    this.crudRfService.UpdateAppRole(this.roleFunction).subscribe(
      res => console.log(res),
        err => console.error(err),
        () => console.log('done') 
    );
  }

}
