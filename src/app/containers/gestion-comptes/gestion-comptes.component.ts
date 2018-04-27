import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CompteFinancierDiagComponent } from '../compte-financier-diag/compte-financier-diag.component';
import { CompteFinancierService } from '../../Services/compte-financier.service';
import { ActivatedRoute } from '@angular/router';
import { compteFinancier } from '../../model/compteFinancier';

@Component({
  selector: 'app-gestion-comptes',
  templateUrl: './gestion-comptes.component.html',
  styleUrls: ['./gestion-comptes.component.scss']
})
export class GestionComptesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dialog : MatDialog, private service: CompteFinancierService) { }
  comptes : any;
  acteur:any;
  
  ngOnInit() {
    this.route.params.subscribe(params=>this.acteur=params.Acteur)
    if(this.acteur=="SFD"){
      this.service.getAll().map(res=>{
        console.log(res);
        let list=[];
        let listr=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element=>{
         if(element.sfd!=null){
           listr.push(element);
         }
        })
        return listr;
      }).subscribe(res=>this.comptes=res,err=>console.log(err));
    }else if (this.acteur=="Adherent"){
      this.service.getAll().map(res=>{
        console.log(res);
        let list=[];
        let listr=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element=>{
         if(element.adherent!=null){
           listr.push(element);
         }
        })
        return listr;
      }).subscribe(res=>this.comptes=res,err=>console.log(err));
    }else{
      this.service.getAll().map(res=>{
        let list=[];
        let listr=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element=>{
         if(element.pdv!=null){
           listr.push(element);
         }
        })
        return listr;
      }).subscribe(res=>this.comptes=res,err=>console.log(err));
    }
    

  }
  Ajouter(){
    const data={
      caller : 'Ajout Compte'
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='600px';
    dialogConfig.data=data;
    this.dialog.open(CompteFinancierDiagComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe(res=>{
     this.ngOnInit();
     });
  }
  bloquer(cpt){
    if(cpt.statutCompte == 'bloqué'){
      this.service.bloquer(cpt).subscribe(res=>this.ngOnInit(),err=>console.log(err));
    }else{
    const data={
      caller : 'bloquer',
      compte : cpt
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='600px';
    dialogConfig.data=data;
    this.dialog.open(CompteFinancierDiagComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe(res=>{
     this.ngOnInit();
     });
  }
}
  Activer(cpt){
    this.service.activer(cpt).subscribe(res=>this.ngOnInit(),err=>console.log(err));
  }
  Desactiver(cpt){
    this.service.desactiver(cpt).subscribe(res=>this.ngOnInit(),err=>console.log(err));
  }

  sortBy(t){
    this.service.sortBy(t.value).subscribe(res=>this.comptes=res,err=>console.log(err));
  }
  search(filter){
    if(filter==""){
      this.ngOnInit();
    }else{
    this.service.filter(filter.Code).subscribe(res=>this.comptes=res,err=>console.log(err));
  }
  }
}
