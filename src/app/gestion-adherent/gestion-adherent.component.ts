import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AdherentService } from '../Services/adherent.service';
import { GestionAdherentDiagComponent } from './gestion-adherent-diag/gestion-adherent-diag.component';
import { PdvServiceService } from '../Services/pdvService/pdv-service.service';
import { DeleteAdherentComponent } from './delete-adherent/delete-adherent.component';

@Component({
  selector: 'app-gestion-adherent',
  templateUrl: './gestion-adherent.component.html',
  styleUrls: ['./gestion-adherent.component.scss']
})
export class GestionAdherentComponent implements OnInit {

  constructor(private diag:MatDialog,private service:AdherentService ,private pdvservice:PdvServiceService) { }
  adherents:any;
  layout="Active";
  ngOnInit() {
    this.service.getAll().subscribe(res=>this.adherents=res,err=>console.log(err));
  }
  ajouter(){
    let data={
      caller:'Ajouter'
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='600px';
    dialogConfig.data=data;
   let diag= this.diag.open(GestionAdherentDiagComponent,dialogConfig);
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    })
  }
  update(data){
    let datal={
      caller:'Modifier',
      data
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='600px';
    dialogConfig.data=datal;
   let diag= this.diag.open(GestionAdherentDiagComponent,dialogConfig);
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    })
  }
  Desactiver(data){
    let datal={
      caller : 'Desactiver',
      data
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='600px';
    dialogConfig.data=datal;
   let diag= this.diag.open(DeleteAdherentComponent,dialogConfig);
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    })
  }
  Activer(data){
    let datal={
      caller : 'Activer',
      data
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='600px';
    dialogConfig.data=datal;
   let diag= this.diag.open(DeleteAdherentComponent,dialogConfig);
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    })
  }
  getDesactivated(){
    if(this.layout=='Active'){
      this.service.getDesactivated().subscribe(res=>this.adherents=res,err=>console.log(err));
      this.layout='Desactive';
    }else{
      this.layout='Active';
      this.ngOnInit();
    }
  }
  search(filter){
    if(filter.Code=="" && filter.Nom==""){
      this.ngOnInit();
    }else{
    let req = {
      numAdherent :"",
      nomAdherent:""
    };
    if(filter.Code && filter.Nom){
      req.numAdherent=filter.Code;
      req.nomAdherent=filter.Nom
    }else if (filter.Nom){
      req.nomAdherent=filter.Nom
    }else {
      req.numAdherent=filter.Code;
    }
    this.service.filter(req).subscribe(res=>this.adherents=res,err=>console.log(err))
  }
}
sortBy(t){
  if(t.value==""){
    this.ngOnInit();
  }else{
    this.service.sort(t.value).subscribe(res=>console.log(res),err=>console.log(err));
  }
  //this.service.sort(t.value).subscribe(res=>console.log(res),err=>console.log(err));
}
}
