import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LettrageService {

  constructor(private cookie: CookieService,private Http: HttpClient) { }
  Token = this.cookie.get('Token');
  fetchTransaction(Jeton){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.Http.get('http://127.0.0.1:8080/transaction/fetch/'+Jeton,{headers});
  }
  getall(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.Http.get('http://127.0.0.1:8080/transaction/getall',{headers});
  }
  search(f){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.Http.post('http://127.0.0.1:8080/transaction/search',f,{headers});
  }
}
