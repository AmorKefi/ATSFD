import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { CookieService } from 'ngx-cookie-service';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';
import { AdherentService } from '../../Services/adherent.service';
import { PdvServiceService } from '../../Services/pdvService/pdv-service.service';
import * as jwt_decode from 'jwt-decode';
import { TransactionsService } from '../../transactions.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent   implements OnInit {
  Token : any = jwt_decode(this.cookie.get('Token'));
  nbrsfd:number;
  nbrpdv:number=0;
  nbrclient:number=0;
  Acteur:any;
  nbrcashin:number=0;
  nbrcashout:number=0;
  nbrtransaction:number=0; 
  constructor( protected localStorage: AsyncLocalStorage ,private router: Router,private cookie: CookieService,private sfdservice: SfdserviceService,private adherentService:AdherentService,private pdvService:PdvServiceService,private transerv: TransactionsService) { }
  ngOnInit() {
    this.Acteur=this.Token.authorities[0].authority;
    if(this.Acteur=="ROLE_ADMIN"){
    this.sfdservice.count().subscribe(res=>this.nbrsfd=res,err=>this.nbrsfd=0);
    this.pdvService.count().subscribe(res=>this.nbrpdv=res,err=>this.nbrpdv=0);
    this.adherentService.count().subscribe(res=>this.nbrclient=res,err=>this.nbrclient=0);
  }else if(this.Acteur=="ROLE_AGENT"){
    this.transerv.getAll(this.Token.PDV.codePdv).subscribe(res=>{
      let list=[];
      for(let key in res){
        if(res.hasOwnProperty(key)){
          list.push(res[key]);
        }
      }
      list.forEach(element => {
        this.nbrtransaction++;
        if(element.typeTransaction=="CASHIN"){
          this.nbrcashin++;
        }else if(element.typeTransaction=="CASHOUT"){
          this.nbrcashout++;
        }
      });
    },err=>console.log(err));
  }else {
    this.pdvService.getAll().subscribe(res=>{console.log(res)
      let list=[];
      let listr=[];
      for(let key in res){
        if(res.hasOwnProperty(key)){
          list.push(res[key]);
        }
      }
      list.forEach(element => {
        if(element.sfd.codesfd==this.Token.SFD.codesfd){
          this.nbrpdv++;
        }
      });
      });
    this.adherentService.getAll().subscribe(res=>{
        let list=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element => {
          if(element.pdv.sfd.codesfd==this.Token.SFD.codesfd){
            this.nbrclient++;
          }
        });     
      })
      this.transerv.getAl().subscribe(res=>{
        let list=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element => {
       if(element.cashIn.user.sfd.codesfd==this.Token.SFD.codesfd){
         this.nbrtransaction++;
       }else if(element.cashOut.user.sfd.codesfd==this.Token.SFD.codesfd){
         this.nbrtransaction++;
       }
        });     
      },err=>console.log(err));
    
  }
  }
}
