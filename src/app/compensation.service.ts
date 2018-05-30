import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CompensationService {

  constructor(private http: HttpClient, private cookie:  CookieService) { }
  Token = this.cookie.get('Token');
  getAll(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/compensation',{headers})
  }

}
