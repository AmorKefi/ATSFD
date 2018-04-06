import { Injectable } from '@angular/core';
//import { ApiUrl } from '../../api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrl } from '../../../api';
import { RoleFunction } from '../../../model/role-function';
import { CookieService } from 'ngx-cookie-service';
//import { RoleFunction } from '../../model/role-function';
    
@Injectable()
export class CrudRfService {
  apiUrl= new ApiUrl();
  constructor(private http: HttpClient, private cookie: CookieService) { }
  Token = this.cookie.get('Token');

  UpdateAppRole(data){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
    headers.append('Content-Type', 'application/json')
    return this.http.put<RoleFunction>(`${this.apiUrl.transactionURL}UpdateRoleFunction`, data,{headers}).map(res =>res);
  }

  DeleteAppRole(id){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
    headers.append('Content-Type', 'application/json')
    return this.http.delete(`${this.apiUrl.transactionURL}deleteRoleFunction/${id}`,{headers}).map(res =>res);
  }

  //getRFwith2Id/
  loadRFwith2Id(IdRole:number,IdFunction:number){
    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
    headers.append('Content-Type', 'application/json')
    return this.http.get<number>(`${this.apiUrl.transactionURL}getRFwith2Id/${IdRole}/${IdFunction}`,{headers}).map(res =>res);
  }
}
