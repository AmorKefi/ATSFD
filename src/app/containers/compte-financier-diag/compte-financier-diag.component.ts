import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CompteFinancierService } from '../../Services/compte-financier.service';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';
import { AdherentService } from '../../Services/adherent.service';

@Component({
  selector: 'app-compte-financier-diag',
  templateUrl: './compte-financier-diag.component.html',
  styleUrls: ['./compte-financier-diag.component.scss']
})
export class CompteFinancierDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adherentservice:AdherentService, private dialog: MatDialog, private service : CompteFinancierService, private servicesfd : SfdserviceService) { }
  sfds:any;
  adherents:any;
  ngOnInit() {
    this.data.statutCompte='activé';
  this.servicesfd.getfreesfd().subscribe(res=>this.sfds=res,err=>console.log(err))
  this.adherentservice.getAll().subscribe(res=>this.adherents=res,err=>console.log(err));
  }
  close(){
    this.dialog.closeAll();
  }
  add(form){
    form.value.dateCreation= new Date();
    if(form.value.sfd){
      form.value.sfd={
        codesfd: form.value.sfd
      }
    }
    if(form.value.adherent){
      form.value.adherent={
        numAdherent:form.value.adherent
      }
    }
    form.value.statutCompte="Activé";
    this.service.add(form.value).subscribe(res=>this.dialog.closeAll(),err=>console.log(err));
  }
  bloquer(){
    let date = new Date();
    this.data.compte.dateCloture=this.formatDate(date);
    this.service.bloquer(this.data.compte).subscribe(res=>this.dialog.closeAll(),err=>console.log(err));
  }
 formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
}
