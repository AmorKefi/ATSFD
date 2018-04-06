import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA} from "@angular/material";
import { AddSfdDialogComponent } from '../add-sfd-dialog/add-sfd-dialog.component';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';
import { DeleteDialog } from '../../gestion_acces/app-role/delete-role.component';
import { DeletediagComponent } from '../deletediag/deletediag.component';
@Component({
  selector: 'app-sfd-layout',
  templateUrl: './sfd-layout.component.html',
  styleUrls: ['./sfd-layout.component.scss']
})
export class SfdLayoutComponent implements OnInit{
  
  constructor(private dialog: MatDialog, private sfd : SfdserviceService) {}
  sfds:any;
  
  ngOnInit(): void {
    this.sfd.getAll().subscribe(res=>this.sfds=res,err=>console.log(err));
  }
  

  openAddSFDDialog(){
 
    let dialogRef = this.dialog.open(AddSfdDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      dialogRef = null;
    });
  };
  update(sfd){
    sfd.caller="Modifier SFD"
    const dialogConfig = new MatDialogConfig();
     dialogConfig.height='400px';
     dialogConfig.width='600px';
     dialogConfig.data = sfd;
     this.dialog.open(AddSfdDialogComponent, dialogConfig);

     this.dialog.afterAllClosed.subscribe(res=>{
      this.ngOnInit();
      });

  }
  
  delete(sfd){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.height = '250px';
  dialogConfig.width = "550";
  dialogConfig.data = sfd;
  this.dialog.open(DeletediagComponent,dialogConfig);
  this.dialog.afterAllClosed.subscribe(res=>{
    this.ngOnInit()
  });
  }
  }
     
    

