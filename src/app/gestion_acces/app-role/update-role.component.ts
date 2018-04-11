import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { AppRoleService } from './app-role.service';
// import { RoleApp } from '../model/role-app';
// import { AppRole } from '../model/role.model';
// import { RoleFunction } from '../model/role-function';
// import { FunctionApp } from '../model/function-app';
import { AppFunctionService } from '../app-fuction/app-function.service';
import { element } from 'protractor';
import { RoleApp } from '../../model/role-app';
import { AppRole } from '../../model/role.model';
import { RoleFunction } from '../../model/role-function';
import { FunctionApp } from '../../model/function-app';
@Component({
  selector: 'update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']   
  })
  export class UpdateDialog implements OnInit{


    private anonyme=false;
    private description:string='';
    private roleName:string='';
    private roleID:number;
    private newRole :RoleApp=new RoleApp();
    
    private index:number=-1;
    // the role that we will send it in the request
    private crud_role:AppRole;
    // the roleFunction that we will send it in the request
    private roleFunctions:Array<RoleFunction>= new Array<RoleFunction>();
    //new function 
    private select= false;
    private update=false;
    private delete=false;
    private add=false;

    private functionApp:FunctionApp;
    private _functions=new Array<FunctionApp>() ;
    private _Rolefunctions=new Array<FunctionApp>() ;


    constructor(
      private appFunctionService:AppFunctionService,
      private appRoleService:AppRoleService ,
      private dialogRef: MatDialogRef<UpdateDialog>,
      @Inject(MAT_DIALOG_DATA) data
            ) {
      this.newRole=data.app_role;
      this.description=data.app_role.description;
      this.roleName=data.app_role.roleName;
      this.anonyme=data.app_role.isAnonymous;
      this.roleID =<number>data.app_role.roleId;

      this.crud_role = new AppRole();
      this.crud_role.roleFunctions= new Array<RoleFunction>();
       this.appRoleService.loadRolaFunction(this.roleID).subscribe(
         res=>this.crud_role.roleFunctions.push(res)
        );   
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
      let r= new RoleFunction();
      r.function= this.functionApp;
      r.role=this.newRole;
      r.add=this.add;
      r.delete=this.delete;
      r.select =this.select;
      r.update=this.update;
      this.roleFunctions.push(r);
      this._Rolefunctions.push(this.functionApp);
      if (this.index > -1) {
        this._functions.splice(this.index, 1);
     }
      this.add=false;
      this.select=false;
      this.update=false;
      this.delete=false;
    }

  


  updateRole(){
    //this.crud_role = new AppRole();
    this.crud_role.roleId=this.newRole.roleId;
    this.crud_role.applicationId=this.newRole.applicationId;
    this.crud_role.roleName=this.roleName;
    this.crud_role.description=this.description;
    this.crud_role.isAnonymous=this.anonyme;
    this.crud_role.loweredRoleName=this.newRole.loweredRoleName;
    this.crud_role.roleFunctions=this.roleFunctions;
    console.log('new role ==>');
    console.log(this.crud_role);
    this.appRoleService.UpdateAppRoleModel( this.crud_role).subscribe(
     res => console.log(res),
     err => console.error(err),
     () => console.log('done') 
   );

}



















    
  }



  /*
  
  
  
    private newRole :RoleApp=new RoleApp();
    private newAppRole :AppRole=new AppRole();
    private anonyme:Boolean;
    private description:string;
    private roleName:string;

   //new function 
   private select= false;
   private update=false;
   private delete=false;
   private add=false;
   private functionApp:FunctionApp;
   private _functions=new Array<FunctionApp>() ;
   private _Rolefunctions=new Array<FunctionApp>() ;
   private crud_role:AppRole;
   
    
    constructor(
      private appFunctionService:AppFunctionService,
      private appRoleService:AppRoleService ,
      private dialogRef: MatDialogRef<UpdateDialog>,
      @Inject(MAT_DIALOG_DATA) data
            ) {
      this.newRole=<RoleApp>data.app_role;
      console.log(this.newRole);
      this.description=this.newRole.description;
      this.roleName=this.newRole.roleName;
      this.anonyme=this.newRole.isAnonymous;
      this.crud_role = new AppRole();
      this.crud_role.roleFunctions= new Array<RoleFunction>();
      this.appRoleService.loadRolaFunction(<number>this.newRole.roleId).subscribe(
        res=>this.crud_role.roleFunctions.push(res)
       );   
     }
    

     listOfNewFunction(fun:FunctionApp[]){      
       this.appRoleService.loadFunctionOfRoleById(<number>this.newRole.roleId).subscribe(data=>{
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



    ngOnInit(): void {
       this.appFunctionService.getAllFunctionArray().subscribe(res => {
        this.listOfNewFunction(res);
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
      } 
    }

   

    AddFunctions(){
      let r= new RoleFunction();
      
      r.add=this.add;
      r.delete=this.delete;
      r.select =this.select;
      r.update=this.update;
      r.function=this.functionApp;
      r.role=this.newRole;
      this._Rolefunctions.push(this.functionApp);
      this.crud_role.roleFunctions.push(r);
      console.log('crud_role ==>');
      console.log(r);
      this.add=false;
      this.select=false;
      this.update=false;
      this.delete=false;
    }


    updateRole(){
      this.crud_role.roleId=this.newRole.roleId;
      this.crud_role.applicationId=this.newRole.applicationId;
      this.crud_role.roleName=this.roleName;
      this.crud_role.description=this.description;
      this.crud_role.isAnonymous=this.anonyme;
      this.crud_role.loweredRoleName=this.newRole.loweredRoleName;
      console.log('new role ==>');
       console.log(JSON.stringify(this.crud_role));
      this.appRoleService.UpdateAppRoleModel(this.crud_role).subscribe(
       res => console.log(res),
       err => console.error(err),
       () => console.log('done') 
     );
     //this.appRoleService.UpdateAppRoleModelRF(JSON.stringify(this.crud_role.roleFunctions)).subscribe(
      this.appRoleService.UpdateAppRoleModelRF(this.crud_role.roleFunctions).subscribe(
      res => console.log(res),
      err => console.error(err),
      () => console.log('done') 
    );

 }
  
  
  

  
  */