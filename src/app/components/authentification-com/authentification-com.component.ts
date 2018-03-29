import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-authentification-com',
  templateUrl: './authentification-com.component.html',
  styleUrls: ['./authentification-com.component.scss']
})
export class AuthentificationComComponent implements OnInit {
  Token: any = this.cookies.get('Token');
  constructor(private auth: AuthServiceService, private router: Router, private cookies: CookieService) { }

  ngOnInit() {
    if (this.Token) {
       this.router.navigate(['']);
    } else {
      this.router.navigate(['auth']);
    }
  }
  authenticate(f) {
    this.auth.authenticate(f).subscribe(res => {
      this.cookies.set('Token', JSON.stringify(res));
      this.router.navigate(['dashboard']);
    },
  err => console.log(err));
  }
}
