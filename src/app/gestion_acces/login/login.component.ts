import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.sercice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  
  private login:any;
  private password:any;
  private loading = false;
  private error = '';
  //private redirectUrl: string;


  constructor(
    private authService:LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService:UserService
  ) {
    //this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
   }

  ngOnInit() {
    this.userService.logout();
  }
  
  toHome(value){
    console.log(value+" => token :"+value.token);
    this.userService.login(value.token);
    this.router.navigate(['home']);
  }
  
 

  onSignin(){
    this.loading = true;
    return this.authService.getAuth({"username":this.login,"password":this.password})
    .subscribe(
      result => {
        this.loading = false;
        if (result) {
          this.userService.login(result.token);
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      },
      error => {
        this.error = 'Username or password is incorrect';
        this.loading = false;
      }
    );
  }

}
