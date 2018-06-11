import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PdvServiceService } from '../Services/pdvService/pdv-service.service';
import { PdvDiagComponent } from '../pdv-diag/pdv-diag.component';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-point-de-vente',
  templateUrl: './point-de-vente.component.html',
  styleUrls: ['./point-de-vente.component.scss']
})
export class PointDeVenteComponent implements OnInit {
  
  usersfd: any =jwt_decode(this.cookie.get('Token'));
  pdvs:any;
  layout='Active'
  constructor(private diag : MatDialog, private service: PdvServiceService,private cookie : CookieService) { }

  ngOnInit() {
   
    this.service.getAll().map(res=>{
      let list=[];
      let listr=[];
      for(let key in res){
        if(res.hasOwnProperty(key)){
          list.push(res[key]);
        }
      }
      list.forEach(element => {
         if(element.sfd.codesfd == this.usersfd.SFD.codesfd){
           listr.push(element);
         }
      });
      return listr;
    }).subscribe(res=>{this.pdvs=res},err=>console.log(err));
    this.layout='Active';
  }
  ajouter(){
    let datapdv={
      caller:''
    }
    datapdv.caller="Ajouter"
    const dialogConfig = new MatDialogConfig();
     dialogConfig.height='auto';
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
    dialogConfig.height='auto';
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
      this.service.getDesactive().map(res=>{
        let list=[];
        let listr=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element => {
           if(element.sfd.codesfd == this.usersfd.SFD.codesfd){
             listr.push(element);
           }
        });
        return listr;
      }).subscribe(res=>this.pdvs=res,err=>console.log(err));
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
      this.service.search(req).map(res=>{
        let list=[];
        let listr=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element => {
           if(element.sfd.codesfd == this.usersfd.SFD.codesfd){
             listr.push(element);
           }
        });
        return listr;
      }).subscribe(res=>{this.pdvs=res},err=>console.log(err));
  }
}
  Desactiver(pdv){
    this.service.Desactiver(pdv).subscribe(res=>this.ngOnInit(),err=>console.log(err));
  }
  Activer(pdv){
    this.service.Activer(pdv).subscribe(res=>this.ngOnInit(),err=>console.log(err));
  }
  sortBy(t){
   this.service.sortBy(t.value).map(res=>{
    let list=[];
    let listr=[];
    for(let key in res){
      if(res.hasOwnProperty(key)){
        list.push(res[key]);
      }
    }
    list.forEach(element => {
       if(element.sfd.codesfd == this.usersfd.SFD.codesfd){
         listr.push(element);
       }
    });
    return listr;
   }).subscribe(res=>this.pdvs=res,err=>console.log(err))
  }
}
