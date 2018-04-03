import { Component, OnInit } from '@angular/core';
import { AppUserService } from './app-user.service';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {

  data:any;
  settings = {
    pager:{
      perPage:50
    },
    columns: {
      // id: {
      //   title: 'ID'
      // }
      //,
      ssoId: {
        title: 'Login'
      },
      firstName: {
        title: 'First Name'
      }
      ,
      lastName: {
        title: 'last Name'
      },
      email: {
        title: 'Email'
      }
     
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
      deleteButtonContent:'<a class="btn btn-outline btn-outline-danger btn-xs"> <i class="fa fa-remove"> </i>Supprime</a>',
      cancelButtonContent:'<a class="btn btn-outline btn-outline-warning btn-xs">Annuler</a>',
      confirmDelete:true
    },
    edit:{
      editButtonContent:'<a class="btn btn-outline btn-outline-warning btn-xs"><i class="fa fa-edit"></i> MàJ</a>',
      saveButtonContent:'<a class="btn btn-outline btn-outline-primary btn-xs"><i class="fa fa-plus"></i>Enregister</a>',
      cancelButtonContent:'<a class="btn btn-outline btn-outline-danger btn-xs">Annuler</a>',
      confirmSave : true
    }
  };

  constructor(private appUserService:AppUserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.appUserService.getAllUsers().subscribe(
      res => this.data=res,
      err => console.error(err),
      () => console.log('done loading all app-roles') 
    );
  }
  
  add(){
     const dialogConfig = new MatDialogConfig();
     dialogConfig.height='700px';
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
    console.log(event);
    this.appUserService.deleteAppUser(event.data.id).subscribe(
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

}
