import {Component, OnInit} from '@angular/core';
import {NewsService, TokenPayload} from './news.service'
import {Router} from '@angular/router'
import {News} from './news'
@Component({
   templateUrl: './news.component.html'
  
})
export class NewsComponent implements OnInit {
    news : News[]
   credentials: TokenPayload = {
    id: 0,
    start_date: '',
    end_date: '',
    news_feild: ''
   }

   
  constructor(private auth: NewsService, private router: Router) { }

  ngOnInit(){
    this.getNews()
}

getNews():void{
    this.auth.getNews().subscribe(news => (this.news = news))
}

submit() {
    
    
   let obs = this.auth.submit(this.credentials)
   
   obs.subscribe(
        (data) => {
            this.router.navigateByUrl('/login') 
        },

        error => {
            console.error(error)
         }
        
    );
    
     
    }

  

}
