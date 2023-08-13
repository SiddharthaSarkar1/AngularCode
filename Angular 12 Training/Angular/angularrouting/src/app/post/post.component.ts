import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postForm!: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    })

    this.getpost();
  }

  getpost(){
    this.http.get('https://leela-web-dev-proj-default-rtdb.asia-southeast1.firebasedatabase.app/post.json')
    /* .pipe(map((response)=>{
      let posts = [];
      for(let key in response){
        posts.push({...response[key], key});
      }
      return posts;
    })) */.subscribe(response => {
      console.log(response);
    })
  }

  onCreatePost(){
    const postData = this.postForm.value;
    this.http.post('https://leela-web-dev-proj-default-rtdb.asia-southeast1.firebasedatabase.app/post.json', postData).subscribe(response => console.log(response));
  }

  get title(){
    return this.postForm.get('title');
  }

  get content(){
    return this.postForm.get('content');
  }

}
