import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class PdvServiceService {

  constructor(private http:HttpClient,private cookie:CookieService) { }
  Token=this.cookie.get('Token');
  getAll(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.get('http://127.0.0.1:8080/pdv',{headers});
  }
  Add(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.post('http://127.0.0.1:8080/pdv/savepdv',data,{headers}) 
  }
  update(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.put('http://127.0.0.1:8080/pdv/updatepdv',data,{headers}) 
  }
  getDesactive(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.get('http://127.0.0.1:8080/pdv/getDesactivated',{headers}) 
  }
  search(filter){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.post('http://127.0.0.1:8080/pdv/search',filter,{headers}) 
  }
  Desactiver(pdv){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.put('http://127.0.0.1:8080/pdv/desactivepdv',pdv,{headers});
  }
  Activer(pdv){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.put('http://127.0.0.1:8080/pdv/activepdv',pdv,{headers});
  }

  sortBy(t){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json');
    return this.http.post('http://127.0.0.1:8080/pdv/sortBy',t,{headers});
  }
  getResponsable(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type','application/json')
    return this.http.get('http://127.0.0.1:8080/api/getAllResponsablesPdv',{headers}) 
  }
}
