import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UtilisateurService {
  constructor(private http: HttpClient, private cookie: CookieService) { }
  // tslint:disable-next-line:member-ordering
  Token = this.cookie.get('Token');
  getUtilisateur() {
    const headers = new HttpHeaders().set('X-Auth-Token', this.Token);
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://127.0.0.1:8080/auth/allUser', {headers});
  }
  updateUtilisateur(User) {
    const headers = new HttpHeaders().set('X-Auth-Token', this.Token);
    headers.append('content-type', 'application/json')
    return this.http.put('http://127.0.0.1:8080/auth/UpdateUser', User, {headers});
  }
  deleteUtilisateur(id) {
    const headers = new HttpHeaders().set('X-Auth-Token', this.Token);
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.delete('http://127.0.0.1:8080/auth/DeleteUser/' + id, {headers});
  }
  addUtilisateur(user) {
    const headers = new HttpHeaders().set('X-Auth-Token', this.Token);
    headers.append('content-type', 'application/json');
    return this.http.post('http://127.0.0.1:8080/auth/addUser', user , { headers })
  }
}
