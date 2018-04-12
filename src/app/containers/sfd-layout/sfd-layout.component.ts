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
    const sfd = {
      caller :'Ajouter SFD'
    }
    let dialogRef = this.dialog.open(AddSfdDialogComponent, {
      height: '543px',
      width: '600px',
      data:sfd
    });

    dialogRef.afterClosed().subscribe(result => {
      dialogRef = null;
      this.ngOnInit();
    });
  };
  update(sfd){
    sfd.caller="Modifier SFD"
    const dialogConfig = new MatDialogConfig();
     dialogConfig.height='543px';
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

  search(filter){
    let req = {
      codesfd :"",
      nomsfd:""
    };
    let send="";
    if(filter.Code && filter.Nom){
      req.codesfd=filter.Code;
      req.nomsfd=filter.Nom
    }else if (filter.Nom){
      req.nomsfd=filter.Nom
    }else {
      req.codesfd=filter.Code;
    }
   this.sfd.getbyFilter(req).subscribe(res=>this.sfds=res,err=>console.log(err));
  }
  }
     
    

