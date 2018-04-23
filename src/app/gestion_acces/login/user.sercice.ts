import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import { TOKEN_NAME } from '../../guards/auth.constants';
import{BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;
  


  //_________________
  private messageSource= new BehaviorSubject<boolean>(false);
    currentMessage=this.messageSource.asObservable();
    changeMessage(message:boolean){
        this.messageSource.next(message);
    }
  //_________________
  constructor() {
  }

  login(accessToken: string) {
    //console.log("In the user service login:"+accessToken);
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    decodedToken
    //console.log(decodedToken);
    //console.log(decodedToken.authorities);
    this.isAdmin = decodedToken.authorities.some(el => el === 'ROLE_ADMINISTRATION');
    this.accessToken = accessToken;

    localStorage.setItem(TOKEN_NAME, accessToken);
    this.changeMessage(true);
  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
  }
  connecte(){
    if(this.getToken() != null){
      return true;
    }
    return false;
  }
  isAdminUser(): boolean {
    return this.isAdmin;
  }

  getAuthorities(){
    if(this.getToken() != null){
      return this.jwtHelper.decodeToken(this.getToken()).authorities;
    }
    return null;
  }

  getToken(){
    //console.log('user service token :: '+localStorage.getItem(TOKEN_NAME));
    return localStorage.getItem(TOKEN_NAME);
  }

  isUser(): boolean {
    return this.getToken() && !this.isAdmin;
  }
}
