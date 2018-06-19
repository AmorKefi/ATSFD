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
  level:any = 1;
  ngOnInit() {
  //   if(this.data.caller!='Ajouter SFD'){
  //   this.service.getresponsables(this.data.codesfd).subscribe(res=>{
  //     this.users=res;
  //     console.log(res);
  //     this.users.forEach(element => {
  //       if(element.sfd!=null){
  //       if(this.data.codesfd==element.sfd.codesfd){
  //         this.data.user=element;
  //       }
  //     }
  //     });
  //   },err=>console.log(err));
  // }else{
  //   this.service.getresponsable().subscribe(res=>{
  //     this.users=res;
  //     console.log(res);
  //     this.users.forEach(element => {
  //       if(element.sfd!=null){
  //       if(this.data.codesfd==element.sfd.codesfd){
  //         this.data.user=element;
  //       }
  //     }
  //     });
  //   },err=>console.log(err));
  // }
  //   this.data.user="Selectionnez un Reponsable";
  }
  close() {
    this.dialog.closeAll();
  }
  add(form){
    form.value.statutsfd="Activé"
    if(form.value.user !='Selectioné un Reponsable' && form.value.user !=null){

    }else{
      form.value.user = null;
    }
this.service.add(form.value).subscribe(res=>{
      let div = document.getElementById('Message');
      div.classList.remove('red','accent-1');
      div.classList.add('rgba-green-light','animate');
      div.innerHTML="SFD ajouté avec succés !";
      setTimeout(function(){
        div.classList.remove('animate');
      },2000)
      this.dialog.closeAll();
    }
    ,err=>{
      if(err.error.exception=='org.springframework.dao.DataIntegrityViolationException'){
        let div = document.getElementById('error');
        div.style.display='block';
        div.classList.add('animate');
        div.innerHTML="Code sfd ou Matricule fiscale Invalide. Merci de réessayer !";
        setTimeout(function(){
          div.classList.remove('animate');
          div.style.display='none';
        },2000);
        
        
      }else{
        let div = document.getElementById('Message');
      div.classList.remove('rgba-green-light');
      div.classList.add('red','accent-1','animate');
      div.innerHTML="SFD n'a pas été ajouté !";
      setTimeout(function(){
        div.classList.remove('animate');
      },2000)
    }
    });
  }
  update(form){
      form.value.statutsfd="Activé"
    this.service.update(form.value).subscribe(res=>{
      let div = document.getElementById('Message');
      div.classList.remove('red','accent-1');
      div.classList.add('rgba-green-light','animate');
      div.innerHTML="SFD a été mis à jour !";
      setTimeout(function(){
        div.classList.remove('animate');
      },2000)
      this.dialog.closeAll();
    },err=>{
      let div = document.getElementById('Message');
      div.classList.remove('rgba-green-light');
      div.classList.add('red','accent-1','animate');
      div.innerHTML="SFD n'a pas été modifié !";
      setTimeout(function(){
        div.classList.remove('animate');
      },2000);
      this.dialog.closeAll();
  });
  }

  reset(form){
    form.reset();
  }
}
