import {Component} from '@angular/core';
import {AuthenticationService, TokenPayload} from '../authentication.service'
import {Router} from '@angular/router'
import { TokenService } from '../token.service';
import { AuthGuardService } from '../auth-guard.service';


@Component({
   templateUrl: './login.component.html'
  
})
export class LoginComponent {
   credentials: TokenPayload = {
     id: 0,
     name: '',
     email: '',
     password: ''
   }

  constructor(private auth: AuthenticationService, private handle: TokenService, private router: Router, private authService: AuthGuardService) { }

  login() {
    let obs = this.auth.login(this.credentials)
    obs.subscribe(
      (data) => {
           this.handleResponse(data)
      
      }
     
     
    )
  }

handleResponse(data){
    
  this.handle.handle(data);
  this.authService.logrefresh();
  this.router.navigateByUrl('/profile');
  
 }  

}
