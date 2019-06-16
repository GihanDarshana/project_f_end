import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Images } from './images'

@Injectable()

export class ImageService{
    constructor(private http: HttpClient) { }

    getImages(): Observable<Images[]> {
      return this.http
         .get<Images[]>('/api/images')            
  }

    postFile(caption: string, fileToUpload: File): Observable<any> {
        console.log(fileToUpload)
        //const endpoint = 'http://localhost:8000/api/images';
      //  const formData: FormData = new FormData();
        //formData.append('Image', fileToUpload.name);
       // formData.append('ImageCaption', caption);
        return this.http
          .post('/api/images', {Image: fileToUpload.name, photo: fileToUpload , ImageCaption: caption }, {
                       responseType: 'text'
                      })
          
    }

    
}