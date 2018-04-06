import { Injectable, OnInit } from '@angular/core';
import { HttpClient,
         HttpResponse, 
         HttpHeaders } from '@angular/common/http';
import{BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApiUrl } from '../../api';
import { FunctionApp } from '../../model/function-app';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AppFunctionService implements OnInit {
    apiUrl= new ApiUrl();
    private messageSource= new BehaviorSubject<string>('deflault message');
    currentMessage=this.messageSource.asObservable();
    changeMessage(message:string){
        this.messageSource.next(message);
    }
 
    constructor(private http: HttpClient, private cookie: CookieService) { }
    Token = this.cookie.get('Token')
    ngOnInit(): void {
       // throw new Error("Method not implemented.");
    }

    getAllFunction(){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<FunctionApp>(`${this.apiUrl.transactionURL}AllFunctions`,{headers}).map(res =>res);
    }
    getAllFunctionArray(){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<Array<FunctionApp>>(`${this.apiUrl.transactionURL}AllFunctions`,{headers}).map(res =>res);
    }

    addAppFunction(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.post<FunctionApp>(`${this.apiUrl.transactionURL}addFunction`, data,{headers}).map(res =>res);
    }

    deleteAppUser(id){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.delete(`${this.apiUrl.transactionURL}deleteFunction/${id}`,{headers}).map(res =>res);
    }

    UpdateAppUser(data){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.put<FunctionApp>(`${this.apiUrl.transactionURL}UpdateFunction`, data,{headers}).map(res =>res);
    }
    ///getFunctionByIdRoleFunction/{id}
    loadFunctionByIdRoleFunction(id){
        const headers = new HttpHeaders().set('X-Auth-Token', JSON.parse(this.Token).token );
        headers.append('Content-Type', 'application/json')
        return this.http.get<FunctionApp>(`${this.apiUrl.transactionURL}getFunctionByIdRoleFunction/${id}`,{headers}).map(res =>res);
    }
}