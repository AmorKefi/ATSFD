import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ParamServiceService {
  constructor(private cookie: CookieService,private Http: HttpClient) { }
  Token = this.cookie.get('Token');
  getHoraireCompensation(){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.Http.get('http://127.0.0.1:8080/parametres/getHoraireCompensation',{headers});
  }
  updateParam(p){

    
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
    headers.append('content-type', 'application/json')
    return this.Http.put('http://127.0.0.1:8080/parametres/UpdateHoraireCompensation',p,{headers});

}
updateLettrage(p){

    
  const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token);
  headers.append('content-type', 'application/json')
  return this.Http.put('http://127.0.0.1:8080/parametres/UpdateHoraireLettrage',p,{headers});

}
}