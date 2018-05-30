import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../gestion_acces/login/user.sercice';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import { CashinServiceService } from '../cashin-service.service';

@Component({
  selector: 'app-add-cashin',
  templateUrl: './add-cashin.component.html',
  styleUrls: ['./add-cashin.component.scss']
})
export class AddCashinComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialog: MatDialog,private cookie: CookieService,private cashservice : CashinServiceService) { }
  Token: any = jwt_decode(this.cookie.get('Token'));
  agent : any;
  Jeton:any;
  ngOnInit() {
    this.cashservice.findbysso(this.Token.sub).subscribe(res=>this.agent=res,err=>console.log(err));
  let date = new Date();
    this.Jeton = date.getFullYear().toString().substring(2,2)+date.getMonth().toString()+date.getDay().toString() + date.getHours().toString()+ date.getMinutes().toString()+date.getSeconds().toString();
  }
  add(f){
    f.value.typeTransaction="CASHIN";
    let date = new Date();
    f.value.dateTransfert=date;
    f.value.user=this.agent;
    f.value.jeton=this.Jeton;
    this.cashservice.add(f.value).subscribe(res=>this.dialog.closeAll(),err=>console.log(err));
  }
  CASHOUT(f){
    f.value.typeTransaction="CASHOUT";
    let date = new Date();
    f.value.dateTransfert=date;
    f.value.user=this.agent;
    this.cashservice.add(f.value).subscribe(res=>this.dialog.closeAll(),err=>console.log(err));
  }
  reset(f){
    f.reset();
  }
  quitter(){
    this.dialog.closeAll();
  }
}
