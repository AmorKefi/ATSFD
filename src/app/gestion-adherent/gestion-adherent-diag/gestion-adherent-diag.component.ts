import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AdherentService } from '../../Services/adherent.service';
import { PdvServiceService } from '../../Services/pdvService/pdv-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestion-adherent-diag',
  templateUrl: './gestion-adherent-diag.component.html',
  styleUrls: ['./gestion-adherent-diag.component.scss']
})
export class GestionAdherentDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private datepipe : DatePipe,private diag:MatDialog,private service:AdherentService,private pdvservice:PdvServiceService) { }
  pdvs:any;
  ngOnInit() {
    this.pdvservice.getAll().subscribe(res=>this.pdvs=res,err=>console.log(err));
    if(this.data.data){
this.data.data.dateNais= this.datepipe.transform(this.data.data.dateNais,'yyyy-MM-dd');
}
this.data.pdv="selectionez Point De vente";
  }
  ajouter(data){
    data.statut="Activé";
if(data.cpt=="selectionez Compte Financier"){
  data.cpt=null;
}
if(data.pdv=="selectionez Point De vente"){
  data.pdv=null;
}else{
  data.pdv={
    codePdv:data.pdv
  }
}
this.service.ajouter(data).subscribe(res=>{
  let div = document.getElementById('Message');
  div.classList.remove('red','accent-1');
  div.classList.add('rgba-green-light','animate');
  div.innerHTML="Adherent a été ajouter !";
  setTimeout(function(){
    div.classList.remove('animate');
  },2000)
  this.diag.closeAll()
},err=>{
  let div = document.getElementById('Message');
  div.classList.remove('rgba-green-light');
  div.classList.add('red','accent-1','animate');
  div.innerHTML="Adherent n'a pas été ajouter !";
  setTimeout(function(){
    div.classList.remove('animate');
  },2000);
  this.diag.closeAll();
});
data.pdv=null;

  }
  update(data){
    if(data.cpt=="selectionez Compte Financier"){
      data.cpt=null;
    }
    if(data.pdv=="selectionez Point De vente"){
      data.pdv=null;
    }else{
      data.pdv={
        codePdv:data.pdv
      }
    }
    this.service.update(data).subscribe(res=>
      {
        let div = document.getElementById('Message');
        div.classList.remove('red','accent-1');
        div.classList.add('rgba-green-light','animate');
        div.innerHTML="Adherent a été modifié !";
        setTimeout(function(){
          div.classList.remove('animate');
        },2000)
        this.diag.closeAll()
      },err=>{
        let div = document.getElementById('Message');
        div.classList.remove('rgba-green-light');
        div.classList.add('red','accent-1','animate');
        div.innerHTML="Adherent n'a pas été modifié !";
        setTimeout(function(){
          div.classList.remove('animate');
        },2000);
        this.diag.closeAll();
      });
    data.pdv=null;
  }

}
