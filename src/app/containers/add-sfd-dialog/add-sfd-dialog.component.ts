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
  users : any;
  ngOnInit() {
    this.service.getresponsable().subscribe(res=>{
      this.users=res;
    },err=>console.log(err));
    //this.data.user="Selectioné un Reponsable";
    
  }
  close() {
    this.dialog.closeAll();
  }
  add(form){
    console.log(form.value);
    form.value.cpt={
      numCompte: form.value.cpt
    };
    form.value.statutsfd="Activé"
  this.service.add(form.value).subscribe(res=>{
      let div = document.getElementById('Message');
      div.classList.remove('red','accent-1');
      div.classList.add('rgba-green-light','animate');
      div.innerHTML="SFD ajouté avec succés !";
      setInterval(function(){
        div.classList.remove('animate');
      },4000)
      /*this.dialog.closeAll();*/
    }
    ,err=>{
      let div = document.getElementById('Message');
      div.classList.remove('rgba-green-light');
      div.classList.add('red','accent-1','animate');
      div.innerHTML="SFD n'a pas été ajouté !";
      setInterval(function(){
        div.classList.remove('animate');
      },4000)
    });
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
