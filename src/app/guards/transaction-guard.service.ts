import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import { UserService } from '../login/user.sercice';
import { TOKEN_NAME } from './auth.constants';


@Injectable()
export class TransactionGuard implements CanActivate {
   private isTransaction:boolean=false;
  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this.userService.getAuthorities().some(el => el.authority === 'ROLE_ADMINISTRATION')){

        return true;
    }
    if(this.userService.getAuthorities().some(el => el.authority === 'ROLE_TRANSACTIONS')){

            return true;
    }
     
  return false;
  }
}