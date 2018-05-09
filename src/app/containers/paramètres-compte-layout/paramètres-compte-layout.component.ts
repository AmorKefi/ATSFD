import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import { AppUserService } from '../../gestion_acces/app-user/app-user.service';
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';

@Component({
  selector: 'app-paramètres-compte-layout',
  templateUrl: './paramètres-compte-layout.component.html',
  styleUrls: ['./paramètres-compte-layout.component.scss']
})
export class ParamètresCompteLayoutComponent implements OnInit {


  constructor(private cookie: CookieService,private userservice:AppUserService,private auth: AuthServiceService) { }
  token:any=jwt_decode(this.cookie.get('Token'));
  User:any;
  res:any;
  ngOnInit() {
    this.userservice.getUserbySSo(this.token.sub).subscribe(res=>this.User=res,err=>console.log(err));
  }
  save(form){
    form.value.id=this.User.id;
    form.value.statut=this.User.statut;
    form.value.password=this.User.password;
    this.userservice.UpdateAppUser(form.value).subscribe(res=>{
      let div = document.getElementById('Message');
      div.classList.remove('red','accent-1');
      div.classList.add('rgba-green-light','animate');
      div.innerHTML="Informations à été Modifier !";
      setTimeout(function(){
        div.classList.remove('animate');
      },2000)
    },err=>console.log(err));
  }
}
