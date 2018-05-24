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
  getbypdvcode(id){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/compte/getbypdv/'+id,{headers});
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
  desactiver(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.put('http://127.0.0.1:8080/compte/DesactivateCompte',data,{headers})
  }
  activer(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.put('http://127.0.0.1:8080/compte/activeCompte',data,{headers})
  }
  bloquer(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.put('http://127.0.0.1:8080/compte/bloqueCompte',data,{headers})
  }
  getfreeacount(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.get('http://127.0.0.1:8080/pdv/freeaccount',{headers});
  }
  sortBy(filter){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.post('http://127.0.0.1:8080/compte/sortby',filter,{headers});
  }
  filter(filter){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    console.log(filter);
    return this.http.post('http://127.0.0.1:8080/compte/Filter',filter,{headers});
  }
}
