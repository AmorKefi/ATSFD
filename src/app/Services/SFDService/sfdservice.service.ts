import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SFD } from '../../model/SFD';

@Injectable()
export class SfdserviceService {

  constructor(private http: HttpClient, private cookie:  CookieService) { }
  Token = this.cookie.get('Token');
  user:any={
    id:'',
    firstName:'',
    lastName:''
  }
  getcsharp(){
    return this.http.get<SFD>('http://localhost:44391/api/sfd/afficheList').map(res=>{ return res});
  }
  count(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get<number>('http://127.0.0.1:8080/sfd/count',{headers})
  }
  getAll(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/sfd/AllSfd',{headers})
  }
  getbyId(id){
    // const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    // headers.append('content-type','application/json');
    return this.http.get('http://localhost:44391/api/sfd/GetById/'+id)
  }
  add(sfd){
    // const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    // headers.append('content-type','application/json');
    return this.http.post('http://localhost:44391/api/sfd/addUser',sfd);
  }
  update(sfd){
    // const headers =  new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    // headers.append('content-type','application/json');
    return this.http.put('http://localhost:44391/api/sfd/updUser',sfd);
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
  getresponsable(){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.get('http://127.0.0.1:8080/sfd/getresponsable',{headers});
  }
  getresponsables(codesfd){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.post('http://127.0.0.1:8080/sfd/getresponsable',codesfd,{headers});
  }
  sortBy(filter){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.post('http://127.0.0.1:8080/sfd/sortby',filter,{headers});
  }
  Activate(sfd){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.put('http://127.0.0.1:8080/sfd/ActivateSfd',sfd,{headers})
  }
  getResponsableSFD(id){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.get('http://127.0.0.1:8080/sfd/findresponsable/'+id,{headers})
  }
  getbySSOid(ssoId){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.post('http://127.0.0.1:8080/sfd/getByssoId',ssoId,{headers})
  }
  getCompte(id){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.post('http://127.0.0.1:8080/sfd/getCompte',id,{headers})
  }
  getpdv(id){
    const headers = new HttpHeaders().set('X-Auth-Token',JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.post('http://127.0.0.1:8080/sfd/getpdv',id,{headers})
  }
}
