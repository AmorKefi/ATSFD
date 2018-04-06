import { Injectable, OnInit } from '@angular/core';
import { HttpClient,
         HttpResponse, 
         HttpHeaders } from '@angular/common/http';
 
import { ApiUrl } from '../../api';
import { UserApp } from '../../model/user-app';
import { CookieService } from 'ngx-cookie-service';
// import { ApiUrl } from '../api';
// import { FunctionApp } from '../model/function-app';
// import { RoleApp } from '../model/role-app';
// import { UserApp } from '../model/user-app';

@Injectable()
export class AppUserService implements OnInit {
    apiUrl= new ApiUrl();
    constructor(private http: HttpClient, private cookie: CookieService) { }
    Token = this.cookie.get('Token');
    ngOnInit(): void {
       // throw new Error("Method not implemented.");
    }

    getAllUsers(){
    
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<UserApp>(`${this.apiUrl.transactionURL}AllUsers`,{ headers }).map(res =>res);
    }
    getAllUsers2(){
        console.log('loading all roles...')
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<Array<UserApp>>(`${this.apiUrl.transactionURL}AllUsers`,{ headers }).map(res =>res);
    }

    addAppUser(data){
        console.log('service::'+data);
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.post<UserApp>(`${this.apiUrl.transactionURL}addUser`, data ,{ headers }).map(res =>res);
    }

    deleteAppUser(id){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.delete(`${this.apiUrl.transactionURL}deleteUser/${id}`,{ headers }).map(res =>res);
    }

    UpdateAppUser(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.put<UserApp>(`${this.apiUrl.transactionURL}UpdateUser`, data ,{ headers }).map(res =>res);
    }
}