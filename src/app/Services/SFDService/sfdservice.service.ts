import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class SfdserviceService {

  constructor(private http: HttpClient, private cookie:  CookieService) { }
  Token = this.cookie.get('Token');

  getAll(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/sfd/AllSfd',{headers})
  }
  getbyId(id){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.get('http://127.0.0.1:8080/sfd/GetSfdByCode/'+id,{headers})
  }
  add(sfd){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.post('http://127.0.0.1:8080/sfd/saveSfd',sfd,{headers});
  }
  update(sfd){
    const headers =  new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.put('http://127.0.0.1:8080/sfd/UpdateSFD',sfd,{headers});
  }
  delete(sfd){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.put('http://127.0.0.1:8080/sfd/DesactivateSfd',sfd,{headers})
  }
  getbyFilter(req){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.post('http://127.0.0.1:8080/sfd/getSFDbyFilter',req,{headers})
  }
  getfreesfd(){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.get('http://127.0.0.1:8080/sfd/getfreesfd',{headers})
  }
  getDesactivated(){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.get('http://127.0.0.1:8080/sfd/getdesactivated',{headers});
  }
}
