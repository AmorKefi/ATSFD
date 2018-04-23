import { 
    Component, 
    OnInit 
    } from '@angular/core';
import { 
    HttpClient,
    HttpResponse,
    HttpHeaders
     } from '@angular/common/http';
// import{
//     ApiUrl
//    } from '../api';
import { 
    Injectable
 } from '@angular/core';
import { ApiUrl } from '../../api';
import { AuthenticationResponse } from '../../model/authentication-response';
//import { AuthenticationResponse } from '../model/authentication-response';

@Injectable()  
export class LoginService implements OnInit {
    api:ApiUrl=new ApiUrl();
    constructor(private http:HttpClient){

    }
    ngOnInit(): void {
    
    }
    getAuth(user) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<AuthenticationResponse>(this.api.authURL, user, { headers, withCredentials: true }).map(res =>  res);
       }

}
