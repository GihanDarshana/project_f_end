import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ImageService } from './images.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  
  templateUrl: './images.component.html',
  providers:[ImageService] 
})
export class ImagesComponent {
  
  imageUrl: string = "/assets/img/images.jpg"
  fileToUpload: File = null;
  constructor(private imageService: ImageService, private http: HttpClient, private router: Router) { }

    handleFileInput(file : FileList){
    this.fileToUpload = <File>file.item(0);

    var reader = new FileReader();
    reader.onload = (event :any) => {
      this.imageUrl = event.target.result;
          }
          reader.readAsDataURL(this.fileToUpload);
  }

  Onsubmit(Caption, Image){
    const fd = new FormData();
    fd.append('image', this.fileToUpload);
    fd.append('name', this.fileToUpload.name);
    fd.append('Caption', Caption.value)
 
    this.http.post('/api/images', fd).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/display');
   });
    
  }

}
