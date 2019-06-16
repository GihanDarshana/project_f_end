import { Component, OnInit } from '@angular/core'
import { AuthGuardService } from './auth-guard.service';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
   public loggedIn: boolean;
  constructor(private authService: AuthGuardService, private token:TokenService, private router: Router){ }

  ngOnInit(){    
      this.loggedIn = this.authService.canActivate()
     // console.log(this.loggedIn)
  }

  logout(){
   
    return this.token.remove();
    return this.router.navigateByUrl('/');
    
  }
}