import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CompteFinancierService {

  constructor(private http : HttpClient, private cookie: CookieService) { }
  Token = this.cookie.get('Token');
  getAll(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/compte/Allcompte',{headers});
  }
  add(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.post('http://127.0.0.1:8080/compte/saveCompte',data,{headers});
  }
  update(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.put('',data,{headers});
  }
}
