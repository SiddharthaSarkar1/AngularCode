import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-darklighttoggle',
  templateUrl: './darklighttoggle.component.html',
  styleUrls: ['./darklighttoggle.component.css']
})
export class DarklighttoggleComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor() { }

  ngOnInit(): void {
  }



}
