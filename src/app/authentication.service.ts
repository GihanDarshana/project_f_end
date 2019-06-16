import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import {Profile} from './profile'
 


export interface UserDetails {
    id: number
    name: string
    email: string
    password: string
    exp: string
    iat: string
}

interface TokenResponse {
    token: string
}

export interface TokenPayload {
    id: number
    name: string
    email: string
    password: string 
}

@Injectable()

export class AuthenticationService {
    private token: string

    constructor(private http: HttpClient, private router: Router) {}

    private saveToken(token: string): void {
        localStorage.setItem('usertoken', token)
        this.token = token
    }

    private getToken(): string {
        if(!this.token) {
            this.token = localStorage.getItem('usertoken')
        }
        return this.token
    }

    public getUserDetails(): UserDetails {
        const token = this.getToken()
        let payload
        if(token) {
            payload = token.split('.')[1]
            payload = window.atob(payload)
            return JSON.parse(payload)
        }
        else{
            return null
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getUserDetails()
      if(user){
          return true
          }
       else{
           return false
       }
    }

     public register(user: TokenPayload): Observable<any> {
           console.log(user)
           return this.http.post('/api/register', user, {
               headers: {'Content-Type': 'application/json'},
               responseType: 'text'
           })
     }

  /* public login (user: TokenPayload): Observable<any> {
        const base = this.http.post(
            '/api/login',
           { email: user.email, password: user.password },
            {
              // headers: {'Content-Type': 'application/json'},
               responseType: 'text'   
            }
        )
        
       return base
    }*/

    public login (data){
        return  this.http.post(
            '/api/login',data,
         //  { email: user.email, password: user.password },
            {
              // data: {name:'emtpy_petition_data', value: 'empty'}
              responseType: 'text'

                  
            }
        )
        
      // return base
    }

    

     public profile(): Observable<Profile[]> {
        return this.http
           .get<Profile[]>('/api/profile')            
    }

     logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}