import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { CookieService } from 'ngx-cookie-service';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';
import { AdherentService } from '../../Services/adherent.service';
import { PdvServiceService } from '../../Services/pdvService/pdv-service.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent   implements OnInit {
  Token : any = this.cookie.get('Token');
  nbrsfd:number;
  nbrpdv:number;
  nbrclient:number;
  logger:String;
  constructor( protected localStorage: AsyncLocalStorage ,private router: Router,private cookie: CookieService,private sfdservice: SfdserviceService,private adherentService:AdherentService,private pdvService:PdvServiceService) { }
  ngOnInit() {
    this.sfdservice.count().subscribe(res=>this.nbrsfd=res,err=>this.nbrsfd=0);
    this.pdvService.count().subscribe(res=>this.nbrpdv=res,err=>this.nbrpdv=0);
    this.adherentService.count().subscribe(res=>this.nbrclient=res,err=>this.nbrclient=0);
    this.logger=jwt_decode(this.Token);

  }
}
