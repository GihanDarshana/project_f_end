import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {Router} from '@angular/router'
import {News} from './news'



export interface TokenPayload {
    id: number
    start_date: String
    end_date: String
    news_feild: string 
}

@Injectable()

export class NewsService {
   

    constructor(private http: HttpClient, private router: Router) {}
    
    getNews(): Observable<News[]> {
        return this.http
           .get<News[]>('/api/news')            
    }
           
    
    
     public submit(news: TokenPayload): Observable<any> {
           console.log(news)
           return this.http.post('/api/news', news, {
               headers: {'Content-Type': 'application/json'},
               responseType: 'text'
                         },
                    )

         
     }
    
//return $http({
  //  method: 'PUT',
    //url: url + data.id,
   // headers: {'Content-Type': 'application/json'},
   // data: angular.toJson(data)
//});
     
}