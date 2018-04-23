import { Component, OnInit } from '@angular/core';
import { AppRoleService } from './app-role.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddRoleComponent } from './add-role/add-role.component';
import { Router, ActivatedRoute } from '@angular/router';
//import { CheckboxComponent } from '../checkbox/checkbox.component';
//import { RoleApp } from '../model/role-app';
import { UpdateDialog } from './update-role.component';
import { DeleteDialog } from './delete-role.component';
//import { AppRole } from '../model/role.model';
//import { FunctionApp } from '../model/function-app';
import { CrudRfComponent } from './crud-rf/crud-rf.component';
import { AppFunctionService } from '../app-fuction/app-function.service';
//import { RoleFunction } from '../model/role-function';
import { AddRoleFunctionDialog } from './add-role-function/add-rf.component';
import { AppRole } from '../../model/role.model';
import { RoleFunction } from '../../model/role-function';
import { FunctionApp } from '../../model/function-app';

@Component({
  selector: 'app-app-role',
    templateUrl: './app-role.component.html',
    styleUrls: ['./app-role.component.scss']
})
export class AppRoleComponent implements OnInit {
   //Array<RoleApp>=new Array<RoleApp>()
  data:AppRole[];
  
  
  constructor(
    private appRoleService:AppRoleService,
    private appFunctionService:AppFunctionService ,
    private dialog: MatDialog ,
    private router: Router,
    private activatedRoute: ActivatedRoute
           ) { 

  }

  listOfNewFunction(role:AppRole[]){ 
    this.data =new Array<AppRole>();
    for(let i=0;i<role.length;i++){ 
      let lRole=new AppRole();
      lRole.roleId=role[i].roleId;
      lRole.applicationId=role[i].applicationId;
      lRole.roleName=role[i].roleName;
      lRole.description=role[i].description;
      lRole.isAnonymous=role[i].isAnonymous;
      lRole.loweredRoleName=role[i].loweredRoleName;
      lRole.roleFunctions= new Array<RoleFunction>();
      this.appRoleService.loadRolaFunction2(role[i].roleId).subscribe(res=>{
       for(let j=0;j<res.length;j++){
        let rf=new RoleFunction();
        rf.idRoleFunction=res[j].idRoleFunction;
        rf.select=res[j].select;
        rf.update=res[j].update;
        rf.delete=res[j].delete;
        rf.add=res[j].add;
        rf.function=new FunctionApp();
        rf.role=new AppRole();
        lRole.roleFunctions.push(rf);
        for(let j=0;j<lRole.roleFunctions.length;j++){ 
          this.appFunctionService.loadFunctionByIdRoleFunction(lRole.roleFunctions[j].idRoleFunction)
                .subscribe(res=>{
                  lRole.roleFunctions[j].function=res
                });
        }
      }
      
      })

     
     this.data.push(lRole);
     
    }
  }

  ngOnInit() {
  
    this.appRoleService.getAllRoles3().subscribe(res => {
       this.listOfNewFunction(res);
      });

   }

  //create 
   CreateRole() { 
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.height='auto';
    dialogConfig.width='650px';
   let diag=this.dialog.open(AddRoleComponent, dialogConfig);
     
   diag.afterClosed().subscribe(res=>{
    this.ngOnInit();
  });   
    
  } 

  //AddRoleFunctionDialog
  AddRoleFunction(r) { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {app_role:r};
    dialogConfig.height='auto';
    dialogConfig.width='650px';
   let diag= this.dialog.open(AddRoleFunctionDialog, dialogConfig);
   diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    });    
  } 

  //delete Role
  DeleteRole(r){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {app_role:r};
    dialogConfig.height='auto';
    dialogConfig.width='450px';
  let diag=this.dialog.open(DeleteDialog, dialogConfig);
  diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    });
  
  }

//update Role
UpdateRole(r){
  const dialogConfig = new MatDialogConfig();
  let diag=this.dialog.open(UpdateDialog, {
      data:{app_role:r},
      height: 'auto',
      width: '700px',
    })
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    
    
    });
 
}

updateRoleFunction(x,r){
  const dialogConfig = new MatDialogConfig();
    let diag=this.dialog.open(CrudRfComponent, {
      data:{role_function:x,
            role:r
      },
      height: 'auto',
      width: '600px',
    })
  diag.afterClosed().subscribe(res=>{
    this.ngOnInit();
  });
    
}


}





































/*


settings = {
    pager:{
      perPage:50
    },
    columns: {
      // roleId: {
      //   title: 'Role Id'
      // },
      //  applicationId: {
      //  title: 'Application Id'
      //  },
      roleName: {
        title: 'Role Name'
      },
      description: {
        title: 'Description'
      }
      ,
      isAnonymous: {
        title: 'Is Anonymous',
        editor:{
          type: 'checkbox',
           config: {
             true: 'true',
             false: 'false'
            }
        }
      //   filter: {
      //     type: 'checkbox',
      //     config: {
      //       true: 'true',
      //       false: 'false'
      //     }
      //   },
      //   valuePrepareFunction: value => [value, 'shoppingList'],
      //   renderComponent: CheckboxComponent
      // }
      }
      // ,
      //  loweredRoleName: {
      //   title: 'Lowered Role Name'
      //  }
    },
    mode :'inline'
    ,
    actions :{
      add:true,
      edit:true,
      delete:true,
      position:'right'
    },
    add:{
      createButtonContent:'Create',
      cancelButtonContent:'Cancel',
      confirmCreate:true
    },
    delete:{
      deleteButtonContent:'Delete',
      confirmDelete:true
    },
    edit:{
      editButtonContent:'Edit',
      saveButtonContent:'Save',
      cancelButtonContent:'Cancel',
      confirmSave : true
    }
  };

  constructor(private appRoleService:AppRoleService, private dialog: MatDialog ,private router: Router,
    private activatedRoute: ActivatedRoute,) { 

  }

  ngOnInit() {
   this.appRoleService.getAllRoles3().subscribe( 
      res => this.data=res,
      //res=>myroles.push(res),
      err => console.error(err),
      () => console.log('done loading all app-roles') 
    );

  }

  onCreateConfirm(event):void { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {app_role:event.newData };
    dialogConfig.height='600px';
    dialogConfig.width='600px';
    if(this.dialog.open(AddRoleComponent, dialogConfig)){
      event.confirm.resolve(event.newData);
    } else{
      event.confirm.reject();
    }

  } 

  add(){
    
  }
  
  onSaveConfirm(event):void {
    console.log('Update');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {app_role:event.newData };
    if(this.dialog.open(UpdateDialog, {
      data:{app_role:event.newData},
      height: '600px',
      width: '600px',
    })){
      event.confirm.resolve(event.newData);
    } else{
      event.confirm.reject();
    }

  }
  
  onDeleteConfirm(event): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {app_role:event.data };
   if(this.dialog.open(DeleteDialog, dialogConfig)){
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
    
  }



*/