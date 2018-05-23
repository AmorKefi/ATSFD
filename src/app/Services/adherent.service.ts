import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AdherentService {

  constructor(private http : HttpClient, private cookie: CookieService) { }
  Token = this.cookie.get('Token');
  count(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get<number>('http://127.0.0.1:8080/adherent/count',{headers});
  }
  getAll(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/adherent/getAll',{headers});
  }
  ajouter(data){
     const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.post('http://127.0.0.1:8080/adherent/save',data,{headers});
  }
  update(data){
     const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.put('http://127.0.0.1:8080/adherent/update',data,{headers});
  }
  desactiver(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.put('http://127.0.0.1:8080/adherent/desactiver',data,{headers});
  }
  activer(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.put('http://127.0.0.1:8080/adherent/activer',data,{headers});
  }
  getDesactivated(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/adherent/getdesactivated',{headers});
  }
  filter(filter){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.post('http://127.0.0.1:8080/adherent/filter',filter,{headers});
  }
  sort(filter){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.http.post('http://127.0.0.1:8080/adherent/sortby',filter,{headers});
  }
}
