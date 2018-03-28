
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA} from "@angular/material";
import { AddSfdDialogComponent } from '../add-sfd-dialog/add-sfd-dialog.component';
@Component({
  selector: 'app-gestion-utilisateurs-layout',
  templateUrl: './gestion-utilisateurs-layout.component.html',
  styleUrls: ['./gestion-utilisateurs-layout.component.scss']
})
export class GestionUtilisateursLayoutComponent  {

  constructor(private dialog: MatDialog) {}
  

  openAddSFDDialog(){
 
    let dialogRef = this.dialog.open(AddSfdDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      dialogRef = null;
    });

    console.log("done");
  };
}
