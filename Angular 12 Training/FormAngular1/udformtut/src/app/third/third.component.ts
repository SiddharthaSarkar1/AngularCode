import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  
  checks = false;
  bulkcheck(event:any){
    if(event.target.checked == true){
      this.checks = true;
    }else{
      this.checks = false;
    }
    console.log(this.checks);
  }

}
