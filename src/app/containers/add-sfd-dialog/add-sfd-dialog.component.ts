import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';
import { CompteFinancierService } from '../../Services/compte-financier.service';

@Component({
  selector: 'app-add-sfd-dialog',
  templateUrl: './add-sfd-dialog.component.html'
})
export class AddSfdDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private service : SfdserviceService, private servicecpt: CompteFinancierService) { }
  comptes : any;
  ngOnInit() {
  }
  close() {
    this.dialog.closeAll();
  }
  add(form){
    form.value.cpt={
      numCompte: form.value.cpt
    };
    form.value.statutsfd="Activé"
  this.service.add(form.value).subscribe(res=>{
      this.dialog.closeAll();
    }
    ,err=>console.log(err));
  }
  update(form){
    form.value.cpt={
      numCompte: form.value.cpt
    };
    if(form.value.statutsfd){
      form.value.statutsfd="Activé"
    }else{
      form.value.statutsfd="désactivé"
    }
    this.service.update(form.value).subscribe(res=>{
      this.dialog.closeAll();
    },err=>console.log(err));
  }
  reset(form){
    form.reset();
  }
}
