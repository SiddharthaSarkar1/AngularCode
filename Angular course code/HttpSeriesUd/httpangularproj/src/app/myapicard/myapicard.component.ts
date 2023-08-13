import { Component, OnInit } from '@angular/core';
import { MyapidataService } from '../services/myapidata.service';

@Component({
  selector: 'app-myapicard',
  templateUrl: './myapicard.component.html',
  styleUrls: ['./myapicard.component.css']
})
export class MyapicardComponent implements OnInit {

  mydatafromapi:any;
  constructor(private myapidatavar:MyapidataService) { }

  ngOnInit(): void {
    this.myapidatavar.gettingData().subscribe((data) => this.mydatafromapi=data)
  }

}
