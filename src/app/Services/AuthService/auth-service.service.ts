import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  authenticate(User) {
    return this.http.post('http://127.0.0.1:8080/auth', User).map(res => res);
  }
}
