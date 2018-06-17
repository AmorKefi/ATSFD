import { Component, OnInit } from '@angular/core';
import { LettrageService } from '../Services/LettrageService/lettrage.service';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lettrage',
  templateUrl: './lettrage.component.html',
  styleUrls: ['./lettrage.component.scss']
})
export class LettrageComponent implements OnInit {

  constructor(private Service:LettrageService,private cookie:CookieService) { }
  Lettrages:any;
  Token:any=jwt_decode(this.cookie.get('Token'));
  Acteur:any="ADMINSFD";
  ngOnInit() {
    // this.Service.fetchTransaction("1111111111").subscribe(res=>console.log(res),err=>console.log(err));
    this.Token.authorities.forEach(element => {
      if(element.authority=="ROLE_AGENT"){
        this.Acteur='AGENT';
            }
        });
    if(this.Acteur=='ADMINSFD'){
    this.Service.getall().map(res=>{
    let list=[];
      let listr=[];
      for(let key in res){
        if(res.hasOwnProperty(key)){
          list.push(res[key]);
        }
      }
      list.forEach(element => {
        if(element.cashIn.user.sfd!=null){
         if(element.cashIn.user.sfd.nomsfd==this.Token.SFD.nomsfd){
           listr.push(element);
         }
        }
        if(element.cashOut!=null){
          if(element.cashOut.user.sfd!=null){
            if(element.cashOut.user.sfd.nomsfd== this.Token.SFD.nomsfd){
              listr.push(element);
            }
          }
        }
      });
      return listr;
    }).subscribe(res=>{this.Lettrages=res},err=>console.log(err));
  }else{
    this.Service.getall().map(res=>{
      let list=[];
        let listr=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element => {
          if(element.cashIn.user.pdv!=null){
           if(element.cashIn.user.pdv.codePdv==this.Token.PDV.codePdv){
             listr.push(element);
           }
          }
          if(element.cashOut!=null){
            if(element.cashOut.user.sfd!=null){
              if(element.cashOut.user.pdv.codePdv== this.Token.PDV.codePdv){
                listr.push(element);
              }
            }
          }
        });
        return listr;
      }).subscribe(res=>{this.Lettrages=res},err=>console.log(err));
  }
  }
  search(f){
    if(f.pdvcashin=="" && f.pdvcashout==""){
      this.ngOnInit();
    }else{
      if(this.Acteur=='ADMINSFD'){
    this.Service.search(f).map(res=>{
      let list=[];
        let listr=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element => {
          if(element.cashIn.user.sfd!=null){
           if(element.cashIn.user.sfd.nomsfd==this.Token.SFD.nomsfd){
             listr.push(element);
           }
          }
          if(element.cashOut!=null){
            if(element.cashOut.user.sfd!=null){
              if(element.cashOut.user.sfd.nomsfd== this.Token.SFD.nomsfd){
                listr.push(element);
              }
            }
          }
        });
        return listr;
      }).subscribe(res=>{this.Lettrages=res},err=>console.log(err));
  }else{
    this.Service.search(f).map(res=>{
      let list=[];
        let listr=[];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            list.push(res[key]);
          }
        }
        list.forEach(element => {
          if(element.cashIn.user.sfd!=null){
           if(element.cashIn.user.pdv.codePdv==this.Token.PDV.codePdv){
             listr.push(element);
           }
          }
          if(element.cashOut!=null){
            if(element.cashOut.user.sfd!=null){
              if(element.cashOut.user.pdv.codePdv== this.Token.PDV.codePdv){
                listr.push(element);
              }
            }
          }
        });
        return listr;
      }).subscribe(res=>{this.Lettrages=res},err=>console.log(err));
  }
}
}
}
