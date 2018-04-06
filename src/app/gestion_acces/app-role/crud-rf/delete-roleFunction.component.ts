import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { CrudRfService } from './crud-rf.service';

@Component({
    selector: 'drf-dialog',
    template: `
    <div class="container">
    <h2 mat-dialog-title justify-content-center>Supprimer la fonction</h2>
    <mat-dialog-actions justify-content-center>
      <button mat-button class="close" [mat-dialog-close]="false">Annuler</button>
      <button mat-button class="btn btn-outline btn-primary" [mat-dialog-close]="true" (click)="sup()">Supprimer</button>
    </mat-dialog-actions>
    </div>
    `,
  })
  export class DeleteRoleFunctionDialog implements OnInit{
    private id :number;
    constructor(private crudRfService:CrudRfService ,dialogRef: MatDialogRef<DeleteRoleFunctionDialog>,@Inject(MAT_DIALOG_DATA) public data) {
      this.id=<number>data.id;
      console.log('delete rf id'+this.id);
     }
    

    ngOnInit(): void {
         
    } 
     sup(){
      this.crudRfService.DeleteAppRole(this.id)
      .subscribe(
        res => console.log(res),
        err => console.error(err),
        () => console.log('done') 
      );
     }
    
  }