import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { AppRoleService } from './app-role.service';
@Component({
    selector: 'select-dialog',
    template: `
    <div class="container">
    <h2 mat-dialog-title justify-content-center>Etes-vous sûr de vouloir supprimer ce rôle ?</h2>
    
    <mat-dialog-actions justify-content-center>
    <button mat-button class="btn btn-outline btn-danger" [mat-dialog-close]="true" (click)="sup()">Oui</button>
      <button mat-button class="close" [mat-dialog-close]="false">Annuler</button>

    </mat-dialog-actions>
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