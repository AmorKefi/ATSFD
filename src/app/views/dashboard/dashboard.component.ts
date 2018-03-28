import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { CookieService } from 'ngx-cookie-service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent   implements OnInit {
  Token : any = this.cookie.get('Token');
  constructor( protected localStorage: AsyncLocalStorage ,private router: Router,private cookie: CookieService) { }
  ngOnInit() {
    
   
  }
}
