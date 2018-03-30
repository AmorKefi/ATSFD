import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class RoleServiceService {

  constructor(private http: HttpClient , private cookie: CookieService) { }
  // tslint:disable-next-line:member-ordering
  Token = this.cookie.get('Token');
  getroles() {
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/role/allrole', {headers});
  }
}
