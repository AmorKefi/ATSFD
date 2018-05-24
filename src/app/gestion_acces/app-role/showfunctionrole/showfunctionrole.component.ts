import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AppRoleService } from '../app-role.service';
import { AppFunctionService } from '../../app-fuction/app-function.service';

@Component({
  selector: 'app-showfunctionrole',
  templateUrl: './showfunctionrole.component.html',
  styleUrls: ['./showfunctionrole.component.scss']
})
export class ShowfunctionroleComponent implements OnInit {

  private Function= new Function();
   data:any;


  settings = {
    pager:{
      perPage:1,
      display:true
    },
    columns: {
      functionName:{
        title: 'Nom Fonction',
        filter: true
      },
      description: {
        title: 'Description',
        filter: true
      }
    },
    mode: 'inline'
    ,
    actions: {
      add: false,
      edit: false,
      delete: true,
      position: 'right'
    },

    delete: {
      deleteButtonContent: '<a class="btn btn-danger  red accent-4 rounded"><i class="fa fa-close"></i></a>',
      cancelButtonContent: '<a class="btn btn-outline btn-warning"><i class="fa fa-times"></i></a>',
      confirmDelete: true
    }
  };


  constructor( @Inject(MAT_DIALOG_DATA) private role, private appRoleService:AppRoleService, private appFunctionService:AppFunctionService ) { 


    }

  ngOnInit() {
    this.settings.pager.display = true;
     this.settings.pager.perPage = 100;
    //  this.appFunctionService.loadFunctionByIdRoleFunction(this.role.).subscribe(res=>{console.log(res)});
    //  this.appRoleService.loadRolaFunction2(this.roleid.roleId).subscribe(res=>{console.log(res)});
  }


}

