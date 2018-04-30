import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PdvServiceService } from '../Services/pdvService/pdv-service.service';
import { SfdserviceService } from '../Services/SFDService/sfdservice.service';
import { CompteFinancierService } from '../Services/compte-financier.service';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-pdv-diag',
  templateUrl: './pdv-diag.component.html',
  styleUrls: ['./pdv-diag.component.scss']
})
export class PdvDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private diag:MatDialog, private service:PdvServiceService, private servicesfd: SfdserviceService, private servicecmpt : CompteFinancierService,private cookie:CookieService) { }
  khalbouza:any;
  comptes:any;
  responsables:any;
  sfds:any={
  };
  ngOnInit() {
    if(this.data.caller=='Modifier'){
      let  user={
        sub:''
      }
      user=jwt_decode(this.cookie.get('Token'));
      this.servicesfd.getbySSOid(user.sub).subscribe(res=>this.sfds=res,err=>console.log(err));
      this.servicecmpt.getfreeacount().subscribe(res=>this.comptes=res,err=>console.log(err));
    }else{
      let  user={
        sub:''
      }
      user=jwt_decode(this.cookie.get('Token'));
      this.servicesfd.getbySSOid(user.sub).subscribe(res=>this.sfds=res,err=>console.log(err));
    // this.servicesfd.getAll().subscribe(res=>this.sfds=res,err=>console.log(err));
    this.servicecmpt.getfreeacount().subscribe(res=>this.comptes=res,err=>console.log(err));
    this.data.sfd="Choisir un SFD";
    this.data.cptf="choisir un compte Financier";
    this.data.statutPdv="Activé";
    this.data.typePdv="commercant";
  }
  this.service.getResponsable().subscribe(res=>this.responsables=res,err=>console.log(err));
  }
  add(form){
    form.value.statutPdv='Activé';
    if(form.value.cptf!=null && form.value.cptf!='choisir un compte Financier'){
      form.value.cptf={
        numCompte:form.value.cptf
      }
    }else{
      form.value.cptf=null
    }
    form.value.sfd=this.sfds;

   this.service.Add(form.value).subscribe(res=>{
     this.diag.closeAll();
   },err=>console.log(err));
  }
  update(form){
    form.value.statutPdv='Activé';
    form.value.sfd={
      codesfd:this.sfds.codesfd
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
