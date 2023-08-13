import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string){
    const postData: Post = {title: title, content: content}
    this.http
    .post(
      'https://leela-web-dev-proj-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message);
    });
  }


  fetchPosts(){
    return this.http
      .get(
        'https://leela-web-dev-proj-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          //Sending headers and headers should be in key value pairs only
          headers: new HttpHeaders({'Custom-headers' : 'Hello'}),
          //Search params or Query params supported by firebase
          params: new HttpParams().set('print', 'pretty')
        }
        )
      .pipe(
        map((responseData: {[key: string]: Post}) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          //Send to analytics Server
          return throwError(errorRes);
        })
      );
  }

  deletePost(){
    return this.http.delete('https://leela-web-dev-proj-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json');
  }


}
