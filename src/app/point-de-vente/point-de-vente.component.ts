import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PdvServiceService } from '../Services/pdvService/pdv-service.service';
import { PdvDiagComponent } from '../pdv-diag/pdv-diag.component';

@Component({
  selector: 'app-point-de-vente',
  templateUrl: './point-de-vente.component.html',
  styleUrls: ['./point-de-vente.component.scss']
})
export class PointDeVenteComponent implements OnInit {

  pdvs:any;
  layout='Active'
  constructor(private diag : MatDialog, private service: PdvServiceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(res=>{this.pdvs=res;},err=>console.log(err));
    this.layout='Active';
  }
  ajouter(){
    let datapdv={
      caller:''
    }
    datapdv.caller="Ajouter"
    const dialogConfig = new MatDialogConfig();
     dialogConfig.height='543px';
     dialogConfig.width='600px';
     dialogConfig.data = datapdv;
    let diag= this.diag.open(PdvDiagComponent, dialogConfig);

     diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
      });
  }
  update(pdv){
    let datapdv={
      caller:'Modifier',
      pdv
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='543px';
    dialogConfig.width='600px';
    dialogConfig.data=datapdv;
   let diag= this.diag.open(PdvDiagComponent,dialogConfig);
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    })
  }

  getDesactivated(){
    if(this.layout=='Active'){
      this.layout='Desactive';
      this.service.getDesactive().subscribe(res=>this.pdvs=res,err=>console.log(err));
    }else{
      this.layout='Active'
      this.ngOnInit();
    }
 
  }
  search(form){
    let req = {
      codePdv :"",
      nomPdv:""
    };
    
    if(form.Code && form.Nom){
      req.codePdv=form.Code;
      req.nomPdv=form.Nom
    }else if (form.Nom){
      req.nomPdv=form.Nom
    }else {
      req.codePdv=form.Code;
    }
    if(req.codePdv=="" &&  req.nomPdv==""){
      this.ngOnInit();
    }else{
      this.service.search(req).subscribe(res=>{this.pdvs=res;console.log(res)},err=>console.log(err));
  }
}
  Desactiver(pdv){
    this.service.Desactiver(pdv).subscribe(res=>this.ngOnInit(),err=>console.log(err));
  }
  Activer(pdv){
    this.service.Activer(pdv).subscribe(res=>this.ngOnInit(),err=>console.log(err));
  }
  sortBy(t){
   this.service.sortBy(t.value).subscribe(res=>this.pdvs=res,err=>console.log(err))
  }
}
