import { Injectable, OnInit } from '@angular/core';
import { HttpClient,
         HttpResponse, 
         HttpHeaders } from '@angular/common/http';
// import { ApiUrl } from '../api';
// import { FunctionApp } from '../model/function-app';
// import { RoleApp } from '../model/role-app';
// import { AppRole } from '../model/role.model';
import { Observable } from 'rxjs/Observable';
import { ApiUrl } from '../../api';
import { RoleApp } from '../../model/role-app';
import { AppRole } from '../../model/role.model';
import { RoleFunction } from '../../model/role-function';
import { FunctionApp } from '../../model/function-app';
import { CookieService } from 'ngx-cookie-service';
// import { RoleFunction } from '../model/role-function';


@Injectable()
export class AppRoleService implements OnInit {
    apiUrl= new ApiUrl();
    constructor(private http: HttpClient, private cookie: CookieService) { }
    Token = this.cookie.get('Token');
    ngOnInit(): void {
      
    }

    getAllRoles(){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<RoleApp>(`${this.apiUrl.transactionURL}AllRoles`,{ headers }).map(res =>res);
    }
getAllRolesResponsables(){


    const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
    headers.append('Content-Type', 'application/json')
    return this.http.get<Array<RoleApp>>(`${this.apiUrl.transactionURL}AllRolesResponsables`,{ headers }).map(res =>res);

}
    getAllRoles2(){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<Array<RoleApp>>(`${this.apiUrl.transactionURL}AllRoles`,{ headers }).map(res =>res);
    }
    
    getAllRoles3():Observable<Array<AppRole>>{
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<Array<AppRole>>(`${this.apiUrl.transactionURL}AllRoles`,{ headers }).map(res =>res);
    }

    addAppRole(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.post<RoleApp>(`${this.apiUrl.transactionURL}addRole`, data,{ headers }).map(res =>res);
    }   

    addRole(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.post<AppRole>(`${this.apiUrl.transactionURL}addRole`, data,{ headers }).map(res =>res);
    }

    deleteAppRole(id){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.delete(`${this.apiUrl.transactionURL}deleteRole/${id}`,{ headers }).map(res =>res);
    }

    UpdateAppRole(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.put<RoleApp>(`${this.apiUrl.transactionURL}UpdateRole`, data,{ headers }).map(res =>res);
    }
    UpdateAppRoleModel(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.put<AppRole>(`${this.apiUrl.transactionURL}UpdateRole`, data,{ headers }).map(res =>res);
    }

    UpdateAppRoleModelRF(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        //return this.http.put<RoleFunctionApp>(`${this.apiUrl.transactionURL}UpdateRoleRF`, data).map(res =>res);
        return this.http.put(`${this.apiUrl.transactionURL}UpdateRoleRF`, data,{ headers }).map(res =>res);
    }
    // getRoleById/{id}

    loadAppRoleModel(id:number){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        
        //return this.http.get<Array<RoleFunction>>(`${this.apiUrl.transactionURL}getRoleById/${id}`).map(res=>res);
        //return this.http.get<AppRole>(`${this.apiUrl.transactionURL}getRoleById/${id}`).map(res=>res.roleFunctions);
        return this.http.get<Array<number>>(`${this.apiUrl.transactionURL}getRoleById/${id}`,{ headers }).map(res=>res);
    }

    loadRolaFunction(id:number){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<RoleFunction>(`${this.apiUrl.transactionURL}getRoleFunctionOfRoleById/${id}`,{ headers }).map(res=>res);
    }
    loadRolaFunction2(id:number){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<Array<RoleFunction>>(`${this.apiUrl.transactionURL}getRoleFunctionOfRoleById/${id}`,{ headers }).map(res=>res);
    }

    loadFunctionOfRoleById(id:number){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<Array<FunctionApp>>(`${this.apiUrl.transactionURL}getfunctionOfRoleById/${id}`,{ headers }).map(res=>res);
    }
}