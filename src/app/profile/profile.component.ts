import { Component, OnInit } from '@angular/core'
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{
   public loggedIn: boolean;
  // public refreshvalue; 

  constructor(private authService: AuthGuardService, private router: Router){ 
   // window.location.reload();
  }

  ngOnInit(){
       
     
      this.loggedIn = this.authService.canActivate();

      console.log(this.authService.logrefresh())
     // if(this.refreshvalue == true){
        // console.log(this.refreshvalue)
     //window.location.reload();
       // this.authService.logoutrefresh();
     // }
  }
}