import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-user-desactives',
  templateUrl: './user-desactives.component.html',
  styleUrls: ['./user-desactives.component.scss']
})
export class UserDesactivesComponent implements OnInit {

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
      delete:false,
      position:'right'
    },
    add:{
      createButtonContent:'Create',
      cancelButtonContent:'Cancel',
      confirmCreate:true
      
    },
   
    edit:{
      editButtonContent:'<a class="btn btn-default  rounded"><i class="fa fa-refresh" aria-hidden="true"></i></a>',
      saveButtonContent:'<a class="btn btn-primary waves-ligh rounded"><i class="fa fa-plus"></i>Activer</a>',
      cancelButtonContent:'<a class="btn btn-danger waves-light rounded">Annuler</a>',
      confirmSave : true
    },
    attr: {
      class: 'table-bordered'
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
  
 

  
  

  activateUser(event): void {
   const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {app_role:event.data};
    dialogConfig.height='200px';
    dialogConfig.width='350px';
    //this.dialog.open(DeleteUserDialogComponent, dialogConfig);
    /*console.log(event);
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
    );*/
  }

}
