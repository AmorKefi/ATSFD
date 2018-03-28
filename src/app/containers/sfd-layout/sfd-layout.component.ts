import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA} from "@angular/material";
import { AddSfdDialogComponent } from '../add-sfd-dialog/add-sfd-dialog.component';
@Component({
  selector: 'app-sfd-layout',
  templateUrl: './sfd-layout.component.html',
  styleUrls: ['./sfd-layout.component.scss']
})
export class SfdLayoutComponent {

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
     
    

