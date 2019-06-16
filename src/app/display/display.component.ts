import {Component, OnInit} from '@angular/core';
import {TokenPayload, DisplayService} from './display.service'
import {Router} from '@angular/router'
import {Images} from './display'
import { HttpClient } from '@angular/common/http';
@Component({
   templateUrl: './display.component.html'
  
})
export class DisplayComponent implements OnInit {
    images : Images[]
   credentials: TokenPayload = {
    id: 0,
    Image: '',
    ImageCaption : ''
   
   }

   
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(){
    this.getImages()
  // console.log('vshdvs');
}

getImages():void{
    this.http.get<Images[]>('/api/images').subscribe(
     
      images => {
       this.images = images
        //console.log(this.images)
      }
      )
}

downloadImage(imagePath){
  //const fd = imagePath;
  this.http.post('/api/download', imagePath,  {
    headers: {'Content-Type': 'application/json'},
    responseType: 'text'
              },).subscribe(data => {
    console.log(data);
    
 });
}


}
