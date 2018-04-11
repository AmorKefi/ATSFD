import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef,MatDialogConfig} from '@angular/material'

import { element } from 'protractor';
import { AppRoleService } from '../app-role.service';
import { AppFunctionService } from '../../app-fuction/app-function.service';
// import { RoleApp } from '../../model/role-app';
// import { RoleFunction } from '../../model/role-function';
// import { FunctionApp } from '../../model/function-app';
// import { AppRole } from '../../model/role.model';
// import { RoleFunctionApp } from '../../model/roleFunction';
import { DeleteRoleFunctionDialog } from '../crud-rf/delete-roleFunction.component';
import { CrudRfService } from '../crud-rf/crud-rf.service';
import { RoleApp } from '../../../model/role-app';
import { RoleFunction } from '../../../model/role-function';
import { FunctionApp } from '../../../model/function-app';
import { RoleFunctionApp } from '../../../model/roleFunction';
@Component({
  selector: 'add-rf',
  templateUrl: './add-rf.component.html',
  styleUrls: ['./add-rf.component.scss']   
  })
  export class AddRoleFunctionDialog implements OnInit{
    private roleID:number;
    private newRole :RoleApp=new RoleApp();
    private index:number=-1;
    private roleFunctions:Array<RoleFunction>= new Array<RoleFunction>();
    //new function 
    private select= false;
    private update=false;
    private delete=false;
    private add=false;
    private functionApp:FunctionApp;
    private _functions=new Array<FunctionApp>() ;
    private _Rolefunctions=new Array<FunctionApp>() ;
    //new roleFunction
    //private roleFunctionApp=new Array<RolaFunctionApp>();
      private roleFunctionApp=new Array<RoleFunctionApp>();

    constructor(
      private appFunctionService:AppFunctionService,
      private appRoleService:AppRoleService ,
      private crudRfService:CrudRfService,
      private dialog: MatDialog ,
      private dialogRef: MatDialogRef<AddRoleFunctionDialog>,
      @Inject(MAT_DIALOG_DATA) data
            ) {
      this.newRole=data.app_role;
      this.roleID =<number>data.app_role.roleId;
     }


    ngOnInit(): void {
      this._functions=null; 
      this.appFunctionService.getAllFunctionArray().subscribe(res => {
       this.listOfNewFunction(res);
      });
     
   }

   listOfNewFunction(fun:FunctionApp[]){  
   
    this.appRoleService.loadFunctionOfRoleById(this.roleID).subscribe(data=>{
      let __functions=new Array<FunctionApp>();
       for(let i=0;i<fun.length;i++){
               let ok =false; 
               let j=0;
               while((j<data.length)&&(!ok)) {
                 if(data[j].functionId==fun[i].functionId){
                   ok=true;
                   this._Rolefunctions.push(data[j]);
                 }else{
                   j++;
                 }
               } 
               if(!ok){
                 __functions.push(fun[i]);
               }
      }
       this._functions=__functions;
    
    });
   }

   selectParent:String='Fonctions';
    onChangeParent(newValue) {
      let i=0;
      let ok=false;
      while(i<this._functions.length && !ok){
        if(this._functions[i].functionId==newValue){
          ok=true;
        }else{
          i++;
        }
      }
      if(ok){
      this.functionApp=this._functions[i];
      this.index=i; 
      //this.parent=this._parent[i];
      } 
    }


    AddFunctions(){
      
      
      let r= new RoleFunctionApp();
      r.functionId= this.functionApp.functionId;
      r.roleId=this.roleID;
      r.add=this.add;
      r.delete=this.delete;
      r.select =this.select;
      r.update=this.update;
      this.roleFunctionApp.push(r)
      this._Rolefunctions.push(this.functionApp);
      if (this.index > -1) {
        this._functions.splice(this.index, 1);
       }
      this.add=false;
      this.select=false;
      this.update=false;
      this.delete=false;
    }

    deleteRoleFunction(functionId){
 
    this.crudRfService.loadRFwith2Id(this.roleID,functionId).subscribe(res=>{
      console.log('$$$$$$ : '+ res)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {id:res};
    dialogConfig.height='200px';
    dialogConfig.width='300px';
    this.dialog.open(DeleteRoleFunctionDialog, dialogConfig);
    this.dialog.afterAllClosed.subscribe(res=>{
      this.ngOnInit();
    });
    });
    }

    updateRole(){
         console.log('Update Role Function');
         console.log(this.roleFunctionApp)
         this.appRoleService.UpdateAppRoleModelRF(this.roleFunctionApp).subscribe(
          res => console.log(res),
          err => console.error(err),
          () => console.log('done') 
        );
    }

}
















