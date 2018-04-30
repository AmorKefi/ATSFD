import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
import { AppFunctionService } from '../../app-fuction/app-function.service';
//import { RoleFunction } from '../../model/role-function';
//import { RoleApp } from '../../model/role-app';
//import { FunctionApp } from '../../model/function-app';
import { AppRoleService } from '../app-role.service';
import { RoleFunction } from '../../../model/role-function';
import { RoleApp } from '../../../model/role-app';
import { FunctionApp } from '../../../model/function-app';
import { AppRole } from '../../../model/role.model';
//import { AppRole } from '../../model/role.model';


@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  private anonyme=false;
  private description:string='';
  private roleName:string='';
  private _parent: any ;
  private roleFunction:RoleFunction;
  private roleFunctions:Array<RoleFunction>= new Array<RoleFunction>();
  private newRole :RoleApp=new RoleApp();
  private parent:FunctionApp;
  private select= false;
  private update=false;
  private delete=false;
  private add=false;
  private crud_role:AppRole;
  private selectedfunction;
  
  
  constructor(private appFunctionService:AppFunctionService,
    private dialogRef: MatDialogRef<AddRoleComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private appRoleService:AppRoleService ) {
      //this.newRole=data.app_role;
     }

  ngOnInit() {
    this.appFunctionService.getAllFunction().subscribe(res => this._parent= res);
    this.selectParent=null;
    
  }

  selectParent:String='Parent';
  onChangeParent(newValue) {
    let i=0;
    let ok=false;
    while(i<this._parent.length && !ok){
      if(this._parent[i].applicationId==newValue){
        ok=true;
      }else{
        i++;
      }
    }
    if(ok){
    this.parent=this._parent[i];
    }
  }
  AddFunctions(){
    let r= new RoleFunction();
    let index = -1;
    r.function=this.parent;
    r.role=this.newRole;
    r.add=this.add;
    r.delete=this.delete;
    r.select =this.select;
    r.update=this.update;
    if(r.function==undefined){
      
    }else{
      console.log(r.function.functionId);
   this.roleFunctions.forEach(element => {
        if(element.function.functionId==r.function.functionId){
          this.selectedfunction=r.function.functionId;
          index++;
        }
     });
     if(index==-1){
    this.roleFunctions.push(r);
    this.add=false;
    this.select=false;
    this.update=false;
    this.delete=false;
  }
  }
  }
  AddRole(){
       this.crud_role = new AppRole();
       //this.crud_role.roleId=this.newRole.roleId;
       this.crud_role.applicationId=this.newRole.applicationId;
       this.crud_role.roleName=this.roleName;
       this.crud_role.description=this.description;
       this.crud_role.isAnonymous=this.anonyme;
       this.crud_role.loweredRoleName=this.newRole.loweredRoleName;
       this.crud_role.roleFunctions=this.roleFunctions;
       console.log('new role ==>');
       console.log(JSON.stringify(this.crud_role));
       this.appRoleService.addRole( this.crud_role).subscribe(
        res =>this.dialogRef.close(),
        err => console.error(err),
        () => console.log('done') 
      );

  }
}
