import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PdvServiceService } from '../Services/pdvService/pdv-service.service';
import { SfdserviceService } from '../Services/SFDService/sfdservice.service';
import { CompteFinancierService } from '../Services/compte-financier.service';

@Component({
  selector: 'app-pdv-diag',
  templateUrl: './pdv-diag.component.html',
  styleUrls: ['./pdv-diag.component.scss']
})
export class PdvDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private diag:MatDialog, private service:PdvServiceService, private servicesfd: SfdserviceService, private servicecmpt : CompteFinancierService) { }
  sfds:any;
  comptes:any;
  ngOnInit() {
    if(this.data.caller=='Modifier'){
      console.log(this.data);
      this.servicesfd.getAll().subscribe(res=>this.sfds=res,err=>console.log(err));
      this.servicecmpt.getfreeacount().subscribe(res=>this.comptes=res,err=>console.log(err));
    }else{
    this.servicesfd.getAll().subscribe(res=>this.sfds=res,err=>console.log(err));
    this.servicecmpt.getfreeacount().subscribe(res=>this.comptes=res,err=>console.log(err));
    this.data.sfd="Choisir un SFD";
    this.data.cptf="choisir un compte Financier";
    this.data.statutPdv="Activé";
    this.data.typePdv="commerçant";
  }
  }
  add(form){
    if(form.value.sfd=='Choisir un SFD'){
      form.value.sfd=null
    }else{
      form.value.sfd={
        codesfd:form.value.sfd
      }
    }
    if(form.value.cptf!=null && form.value.cptf!='choisir un compte Financier'){
      form.value.cptf={
        numCompte:form.value.cptf
      }
    }else{
      form.value.cptf=null
    }
    console.log(form.value);
   this.service.Add(form.value).subscribe(res=>{
     this.diag.closeAll();
   },err=>console.log(err));
  }
  update(form){
    if(form.value.sfd!=null && form.value.sfd !='choisir un SFD'){
      form.value.sfd={
        codesfd:form.value.sfd
      }
    }else{
      form.value.sfd=null
    }
    if(form.value.cptf!=null && form.value.cptf!='choisir un compte Financier'){
      form.value.cptf={
        numCompte:form.value.cptf
      }
    }else{
      form.value.cptf=null
    }
    console.log(form.value);
    this.service.update(form.value).subscribe(res=>this.diag.closeAll(),err=>console.log(err));
  }
  reset(form){
    form.reset();
  }
  close(){
    this.diag.closeAll();
  }
} 
