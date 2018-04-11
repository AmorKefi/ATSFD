import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CompteFinancierService } from '../../Services/compte-financier.service';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';

@Component({
  selector: 'app-compte-financier-diag',
  templateUrl: './compte-financier-diag.component.html',
  styleUrls: ['./compte-financier-diag.component.scss']
})
export class CompteFinancierDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private service : CompteFinancierService, private servicesfd : SfdserviceService) { }
  sfds:any;
  ngOnInit() {
  this.servicesfd.getfreesfd().subscribe(res=>this.sfds=res,err=>console.log(err))
  }
  close(){
    this.dialog.closeAll();
  }
  add(form){
    form.value.dateCreation= new Date();
    if( form.value.statutCompte){
      form.value.statutCompte="activé"
    }else{
      form.value.statutCompte="désactivé"
    }
    if(form.value.sfd){
      form.value.sfd={
        codesfd: form.value.sfd
      }
    }
    this.service.add(form.value).subscribe(res=>this.dialog.closeAll(),err=>console.log(err));
  }
  bloquer(form){
    this.service.bloquer(form.value).subscribe(res=>this.dialog.closeAll(),err=>console.log(err));
  }
}
