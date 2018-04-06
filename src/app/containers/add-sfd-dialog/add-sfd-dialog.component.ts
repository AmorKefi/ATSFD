import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';

@Component({
  selector: 'app-add-sfd-dialog',
  templateUrl: './add-sfd-dialog.component.html',
})
export class AddSfdDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private service : SfdserviceService) { }

  ngOnInit() {
  }
  close() {
    this.dialog.closeAll();
  }
  add(form){
    this.service.add(form.value).subscribe(res=>{
      this.dialog.closeAll();
    }
    ,err=>console.log(err));
  }
  update(form){
    this.service.update(form.value).subscribe(res=>{
      this.dialog.closeAll();
    },err=>console.log(err));
  }

}
