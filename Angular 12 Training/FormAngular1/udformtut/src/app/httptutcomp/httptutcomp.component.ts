import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-httptutcomp',
  templateUrl: './httptutcomp.component.html',
  styleUrls: ['./httptutcomp.component.css']
})
export class HttptutcompComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  handleEvent(){
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe((response)=>
    console.log(response)
    )
  };

}
