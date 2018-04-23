import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { AppRoleService } from './app-role.service';
@Component({
    selector: 'select-dialog',
    template: `
    <div class="card col-12 p-0 m-0">
    <h2 class='justify-content-center card-header cyan darken-3' >delete role</h2>
    <div class='card-body p-0 pb-4 m-0'>
    Etes-vous sûr de vouloir supprimer ce rôle ?
    </div>
    <div  class='card-footer  cyan darken-3'>
    <div class='row justify-content-center'>
    <button mat-button class="btn btn-outline btn-danger col-4" [mat-dialog-close]="true" (click)="sup()">Oui</button>
      <button mat-button class=" btn blue darken-4 rounded col-4" [mat-dialog-close]="false">Annuler</button>
</div>
    </div>
    </div>
    `,
  })
  export class DeleteDialog implements OnInit{
    
    constructor(private appRoleService:AppRoleService ,dialogRef: MatDialogRef<DeleteDialog>,@Inject(MAT_DIALOG_DATA) public data) {
        console.log('Delete Role' + data.app_role);
     }
    

    ngOnInit(): void {
         
    } 
     sup(){
      this.appRoleService.deleteAppRole(<number>this.data.app_role['roleId']).subscribe(
        res => console.log(res),
        err => console.error(err),
        () => console.log('done') 
      );
     }
    
  }