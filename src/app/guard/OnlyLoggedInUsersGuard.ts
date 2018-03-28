import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private cookie: CookieService,private router: Router) {}; 
    Token : any = this.cookie.get('Token');
  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.Token) { 
      return true;
    } else {
        this.router.navigate(['auth']);
      return false;
    }
  }
}