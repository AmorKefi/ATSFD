import { Component, OnInit } from '@angular/core';

import { SFD } from '../model/SFD';
import { SfdserviceService } from '../Services/SFDService/sfdservice.service';
import { MatDialog, MatDialogConfig } from '../../../node_modules/@angular/material';
import { AddSfdDialogComponent } from '../containers/add-sfd-dialog/add-sfd-dialog.component';

@Component({
  selector: 'app-sfdsnewview',
  templateUrl: './sfdnewview.component.html',
  styleUrls: ['./sfdnewview.component.scss']
})
export class sfdnewviewComponent implements OnInit {

  constructor(private sfdsservice: SfdserviceService, private diag: MatDialog) { }
  sfds;
  ngOnInit() {
    this.sfdsservice.getcsharp().subscribe(res => {
      let s: SFD = res;
      this.sfds=s;
      console.log(this.sfds);
    }, err => console.log(err))
  }
  openAddSFDDialog(){
    const sfd = {
      caller :'Ajouter SFD'
    }
    let dialogRef = this.diag.open(AddSfdDialogComponent, {
      height: 'auto',
      width: '700px',
      data:sfd
    });

    dialogRef.afterClosed().subscribe(result => {
      dialogRef = null;
      this.ngOnInit();
    });
  }
  update(sfd){
    sfd.caller="Modifier SFD"
    const dialogConfig = new MatDialogConfig();
     dialogConfig.height='auto';
     dialogConfig.width='700px';
     dialogConfig.data = sfd;
     this.diag.open(AddSfdDialogComponent, dialogConfig);

     this.diag.afterAllClosed.subscribe(res=>{
      this.ngOnInit();
      });

  }

}
