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
    addResponsable(data){

        console.log('service::'+data);
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.post<UserApp>(`${this.apiUrl.transactionURL}addResponsable`, data ,{ headers }).map(res =>res);


    }

    deleteAppUser(id){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
      
        return this.http.put(`${this.apiUrl.transactionURL}desactivateUser`,id ,{ headers }).map(res =>res);
    }
    ActiverUser(id){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
      
        return this.http.put(`${this.apiUrl.transactionURL}activateUser`,id ,{ headers }).map(res =>res);
    }

    UpdateAppUser(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.put<UserApp>(`${this.apiUrl.transactionURL}UpdateUser`, data ,{ headers }).map(res =>res);
    }
    getDesactivatedUser(){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get(`${this.apiUrl.transactionURL}desactivatedUser`, { headers });
    }
    getAllResponsables(){

        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get(`${this.apiUrl.transactionURL}getAllResponsablesPdv`, { headers });

    }
    getDesactivatedResponsables(){

        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get(`${this.apiUrl.transactionURL}getAllResponsablesDesactives`, { headers });

    }
    getDesactivatedAdminSFD(){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get(`${this.apiUrl.transactionURL}getAllAdminSfdDesactives`, { headers });

    }
    getDesactivatedAgent(){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get(`${this.apiUrl.transactionURL}getAllAgentsDesactives`, { headers }); 


    }
    sortBy(filter){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${this.apiUrl.transactionURL}sortby`,filter, { headers });
    }
    updateReponsable(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.put<UserApp>(`${this.apiUrl.transactionURL}updateResponsable`, data ,{ headers });
       
    }
    getAllAgents(){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get(`${this.apiUrl.transactionURL}getAllAgents`, { headers });

    }
    getAllAdminSFD(){

        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get(`${this.apiUrl.transactionURL}getALLAdminSFD`, { headers });
    }
}