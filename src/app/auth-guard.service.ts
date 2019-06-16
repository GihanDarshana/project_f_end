import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {AuthenticationService} from './authentication.service'
import { TokenService } from './token.service';

@Injectable()
export class AuthGuardService implements CanActivate {
     public currenStatus=true
     public refresh=true;
    constructor(private Token:TokenService, private router: Router){}
        
    canActivate(){
        if(this.Token.loggedIn()){
          
            this.currenStatus = false
        }
        return this.currenStatus
    }

    logrefresh(){
        this.refresh=true;
        //return this.refresh
    }

    logoutrefresh(){
        this.refresh=false;
        //return false;
    }
}