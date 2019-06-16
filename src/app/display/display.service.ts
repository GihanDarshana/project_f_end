import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {Router} from '@angular/router'
import {Images} from './display'



export interface TokenPayload {
    id: number
    Image: string
    ImageCaption: string
}

@Injectable()

export class DisplayService {
   

    constructor(private http: HttpClient, private router: Router) {}
    
    getImages(): Observable<Images[]> {
        return this.http
           .get<Images[]>('/api/images')            
    }
           
   submit(imagePath){
        //console.log(imagePath);
   } 
    
     
     
    

}