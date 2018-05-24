import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit{
  logger:any;
  Token : any = this.cookie.get('Token');
  constructor(private cookie : CookieService){
    
  }
  ngOnInit(): void {
    this.logger=jwt_decode(this.Token);
  }
  
 }
