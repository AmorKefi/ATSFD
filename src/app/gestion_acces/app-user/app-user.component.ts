import { Component, OnInit } from '@angular/core';
import { AppUserService } from './app-user.service';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteDialog } from '../app-role/delete-role.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {
  layout='Active';
data:any;
perPageSelect: any;

  settings = {
    pager:{
      perPage:1,
      display:true

    },
    columns: {
      ssoId: {
        title: 'Login',
        filter:false
      
      },
      firstName: {
        title: 'Nom',
        filter:false
      }, 
      lastName: {
        title: 'Prénom',
       
        filter:false
      },
      email: {
        title: 'Email',
      
        filter:false
       },
      statut:{
        title: 'Statut',
        filter: false,
       
        editor: {
          type: "list",
          config:{
            list: [{title: 'Activé', value: 'Activé'},{title: 'Désactivé', value: 'Désactivé'}], // a list to populate the options
          }
        }
    
       
      }
      // password:{
      //   title:'Mot de passe',
      //   filter:false
      // }
     
    },
    mode :'inline'
    ,
    actions :{
      add:false,
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
      deleteButtonContent:'<a class="btn btn-danger  red accent-4 rounded"><i class="fa fa-close"></i></a>',
      cancelButtonContent:'<a class="btn btn-outline btn-warning">Annuler</a>',
      confirmDelete:true
    },
    edit:{
      editButtonContent:'<a class="btn btn-default  rounded"><i class="fa fa-pencil"></i></a>',
      saveButtonContent:'<a class="btn btn-primary waves-ligh rounded"><i class="fa fa-plus"></i>Enregister</a>',
      cancelButtonContent:'<a class="btn btn-danger waves-light rounded">Annuler</a>',

      confirmSave : true
    },
    attr: {
      class: 'table-bordered'
    }
  };

  constructor(private appUserService:AppUserService, private dialog: MatDialog,private route:Router) { }

  ngOnInit() {
    this.settings.pager.display = true;
    this.settings.pager.perPage = 100;
    this.appUserService.getAllUsers().subscribe(
      res =>{ this.data=res;
 
      
      console.log(res)},
      err => console.error(err),
      () => console.log('done loading all app-roles') 
    );
  }
  
  add(){
     const dialogConfig = new MatDialogConfig();
     dialogConfig.height='auto';
     dialogConfig.width='650px';
     this.dialog.open(AddUserComponent, dialogConfig);
     this.dialog.afterAllClosed.subscribe(res=>{
      this.ngOnInit(); 
      });
  }

  
  
  onSaveConfirm(event):void {
    console.log('On Save Confirm : '+event);
    this.appUserService.UpdateAppUser(event.newData).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
      },
      err => {
        console.error(err);
        event.confirm.reject();
      },
      () => console.log('done') 
    );
  }
  
  onDeleteConfirm(event): void {
   const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {app_role:event.data};
    dialogConfig.height='auto';
    dialogConfig.width='350px';
    this.dialog.open(DeleteUserDialogComponent, dialogConfig);
  }
  getAllDesactives(){
    if(this.layout=='Active'){
    this.layout='Desactivated';
    this.appUserService.getDesactivatedUser().subscribe(res=>this.data=res,err=>console.log(err));
  }else{
    this.layout='Active';
    this.ngOnInit();
  }
  }

}
