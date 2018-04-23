import { HttpRequest,
        HttpHandler,
        HttpEvent,
        HttpInterceptor
     } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { UserService } from "../login/user.sercice";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    constructor(private userService:UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-Auth-Token': `${this.userService.getToken()}`,
                'Content-Type': 'application/json; charset=utf-8'

            }
          }); 
          //console.log(`X-Auth-Token: ${this.userService.getToken()}`);
          // console.log('the inter   the token is => '+ this.userService.getToken()+' req=> '+req.headers.getAll('Authorization'));
          // req.headers.append('X-Auth-Token',this.userService.getToken());
          // req = req.clone();
          //console.log(req.headers);
         return next.handle(req);        
    }
} 