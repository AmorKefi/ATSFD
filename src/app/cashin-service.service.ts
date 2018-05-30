import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CashinServiceService {

  constructor(private http: HttpClient, private cookie:  CookieService) { }
  Token = this.cookie.get('Token');
  findbysso(sso){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.post('http://127.0.0.1:8080/api/getbysso',sso,{headers})
  }
  add(transaction){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.post('http://127.0.0.1:8080/transaction/AddTransaction',transaction,{headers})
  }
  find(jeton){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/transaction/fetch/'+jeton,{headers})
  }
}
