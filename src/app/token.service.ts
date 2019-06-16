import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token) {
    
    this.set(token);
    //console.log(this.loggedIn());
    
  }

  set(token) {
      
    localStorage.setItem('token', token);
  }

  get() {

    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
       const token = this.get();
    if(token){
      const payload = this.payload(token);
        return true;
    }
    return false
  }


  payload(token){
    let payload
    payload = token.split('.')[1]
   //  return this.decode(payload)
  
  }  

//  decode(payload){
  //   return JSON.parse(atob(payload));
 // }

 loggedIn(){
   return this.isValid();
 }
}
