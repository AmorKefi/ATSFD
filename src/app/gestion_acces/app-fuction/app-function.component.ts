import { Component, OnInit } from '@angular/core';
// import { FunctionApp } from '../model/function-app';
import { AppFunctionService } from './app-function.service';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { AddFunctionComponent } from './add-function/add-function.component';

@Component({
  selector: 'app-app-fuction',
  templateUrl: './app-fuction.component.html',
  styleUrls: ['./app-fuction.component.scss']
})
export class AppFunctionComponent implements OnInit {
  message: String = 'default message';
  data: any;
  settings = {
    hideSubHeader: false,
    pager: {
      perPage: 50
    },
    columns: {
      functionName: {
        title: 'Function Name',
        filter: true
      },
      description: {
        title: 'Description',
        filter: true
      },
     
    
      // ,
      // applicationId: {
      //   title: 'Application Id',
      //   filter: true
      // }
      // ,
      // select: {
      //   title: 'Select',
      //   filter: true,
      //   type:'html'
      // },
      // update: {
      //   title: 'Update',
      //   filter: true,
      //   type:'html'
      // },
      // delete: {
      //   title: 'Delete',
      //   filter: true,
      //   type:'html'
      // },
      // add: {
      //   title: 'Add',
      //   filter: true,
      //   type:'html'
      // }
    
    },
    mode : 'inline'
    ,
    actions : {
      add: false,
      edit: true,
      delete: true,
      position: 'right'
    },
     add: {
    //   createButtonContent:'Create',
    //   cancelButtonContent:'Cancel',
    //   confirmCreate:true
     },
     delete:{
      deleteButtonContent:'<a class="btn btn-danger  red accent-4 rounded"><i class="fa fa-close"></i></a>',
      cancelButtonContent:'<a class="btn btn-outline btn-warning">Annuler</a>',
      confirmDelete:true
    },
    edit:{
      editButtonContent:'<a class="btn cyan darken-3  rounded"><i class="fa fa-pencil"></i></a>',
      saveButtonContent:'<a class="btn btn-primary waves-ligh rounded"><i class="fa fa-plus"></i>Enregister</a>',
      cancelButtonContent:'<a class="btn btn-danger red accent-4 rounded">Annuler</a>',

      confirmSave : true
    },
  };

  constructor(
       private appFunctionService: AppFunctionService,
       private dialog: MatDialog
              ) {}




  ngOnInit() {
    this.appFunctionService.getAllFunction().subscribe(
      res => this.data = res,
      err => console.error(err),
      () => console.log('done loading function !!!')
    );
    this.appFunctionService.currentMessage.subscribe(message => this.message = message);
  }
  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    dialogConfig.height = '390px';
    dialogConfig.width = '600px';
    this.dialog.open(AddFunctionComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(res => {
      this.ngOnInit();
    });

  }

  onSaveConfirm(event): void {
    console.log('On Save Confirm : ' + event);
    this.appFunctionService.UpdateAppUser(event.newData).subscribe(
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
    this.appFunctionService.deleteAppUser(event.data.applicationId).subscribe(
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
